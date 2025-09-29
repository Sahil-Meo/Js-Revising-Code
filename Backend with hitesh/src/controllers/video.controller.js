import { uploadOnCloudinary } from '../utils/Cloudinary.js'
import { Video } from '../models/video.models.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import mongoose, { isValidObjectId } from 'mongoose'
import fs from 'fs'

const getAllVideos = asyncHandler(async (req, res) => {
    const {
        page = 1,
        limit = 10,
        query,
        sortBy = 'createdAt',
        sortType = 'desc',
        userId
    } = req.query;

    // Build aggregation pipeline
    const pipeline = [];

    // Match stage for search and user filter
    const matchStage = { isPublished: true };

    if (query) {
        matchStage.$or = [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
        ];
    }

    if (userId && isValidObjectId(userId)) {
        matchStage.owner = new mongoose.Types.ObjectId(userId);
    }

    pipeline.push({ $match: matchStage });

    // Lookup owner details
    pipeline.push({
        $lookup: {
            from: 'users',
            localField: 'owner',
            foreignField: '_id',
            as: 'owner',
            pipeline: [{
                $project: {
                    username: 1,
                    fullName: 1,
                    avatar: 1
                }
            }]
        }
    });

    pipeline.push({
        $addFields: {
            owner: {
                $first: "$owner"
            }
        }
    });

    // Sort stage
    const sortStage = {};
    sortStage[sortBy] = sortType === 'desc' ? -1 : 1;
    pipeline.push({ $sort: sortStage });

    // Pagination options
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        customLabels: {
            totalDocs: 'totalVideos',
            docs: 'videos'
        }
    };

    try {
        const videos = await Video.aggregatePaginate(
            Video.aggregate(pipeline),
            options
        );

        if (!videos?.videos?.length) {
            return res.status(200).json(
                new ApiResponse(200, { videos: [], totalVideos: 0 }, "No videos found")
            );
        }

        return res.status(200).json(
            new ApiResponse(200, videos, "Videos fetched successfully")
        );
    } catch (error) {
        throw new ApiError(500, "Error while fetching videos");
    }
});

const publishVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    // Validate required fields
    if (!title?.trim() || !description?.trim()) {
        throw new ApiError(400, "Title and description are required");
    }

    // Check if video and thumbnail files are uploaded (assumes multer middleware is used in routes)
    const videoFileLocalPath = req.files?.videoFile?.[0]?.path;
    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;

    if (!videoFileLocalPath) {
        throw new ApiError(400, "Video file is required");
    }

    if (!thumbnailLocalPath) {
        // Clean up video file if thumbnail is missing
        if (fs.existsSync(videoFileLocalPath)) {
            fs.unlinkSync(videoFileLocalPath);
        }
        throw new ApiError(400, "Thumbnail is required");
    }

    try {
        // Upload video to cloudinary
        const videoFile = await uploadOnCloudinary(videoFileLocalPath);
        if (!videoFile) {
            throw new ApiError(500, "Failed to upload video file");
        }

        // Upload thumbnail to cloudinary
        const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
        if (!thumbnail) {
            throw new ApiError(500, "Failed to upload thumbnail");
        }

        // Extract duration from cloudinary response
        const duration = videoFile.duration || 0;

        // Create video document
        const video = await Video.create({
            videoFile: videoFile.secure_url,
            thumbnail: thumbnail.secure_url,
            title: title.trim(),
            description: description.trim(),
            duration,
            owner: req.user._id
        });

        if (!video) {
            throw new ApiError(500, "Failed to create video record");
        }

        // Populate owner details
        const createdVideo = await Video.findById(video._id).populate(
            'owner',
            'username fullName avatar'
        );

        return res.status(201).json(
            new ApiResponse(201, createdVideo, "Video published successfully")
        );

    } catch (error) {
        // Clean up uploaded files in case of error
        if (fs.existsSync(videoFileLocalPath)) {
            fs.unlinkSync(videoFileLocalPath);
        }
        if (fs.existsSync(thumbnailLocalPath)) {
            fs.unlinkSync(thumbnailLocalPath);
        }

        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, "Error while publishing video");
    }
});

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    try {
        const video = await Video.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(videoId)
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: '_id',
                    as: 'owner',
                    pipeline: [{
                        $project: {
                            username: 1,
                            fullName: 1,
                            avatar: 1
                        }
                    }]
                }
            },
            {
                $lookup: {
                    from: 'likes',
                    localField: '_id',
                    foreignField: 'video',
                    as: 'likes'
                }
            },
            {
                $addFields: {
                    owner: {
                        $first: "$owner"
                    },
                    likesCount: {
                        $size: "$likes"
                    },
                    isLiked: {
                        $cond: {
                            if: { $in: [req.user?._id, "$likes.likedBy"] },
                            then: true,
                            else: false
                        }
                    }
                }
            },
            {
                $project: {
                    likes: 0
                }
            }
        ]);

        if (!video?.length) {
            throw new ApiError(404, "Video not found");
        }

        // Increment views count
        await Video.findByIdAndUpdate(
            videoId,
            { $inc: { views: 1 } },
            { new: true }
        );

        return res.status(200).json(
            new ApiResponse(200, video[0], "Video fetched successfully")
        );

    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, "Error while fetching video");
    }
});

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;
    const { title, description } = req.body;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    if (!title?.trim() && !description?.trim() && !req.file) {
        throw new ApiError(400, "At least one field is required to update");
    }

    try {
        // Find the video
        const video = await Video.findById(videoId);
        if (!video) {
            throw new ApiError(404, "Video not found");
        }

        // Check if user owns the video
        if (video.owner.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to update this video");
        }

        // Prepare update data
        const updateData = {};

        if (title?.trim()) {
            updateData.title = title.trim();
        }

        if (description?.trim()) {
            updateData.description = description.trim();
        }

        // Handle thumbnail update if provided (assumes multer middleware in routes)
        if (req.file?.path) {
            const thumbnail = await uploadOnCloudinary(req.file.path);
            if (!thumbnail) {
                throw new ApiError(500, "Failed to upload new thumbnail");
            }
            updateData.thumbnail = thumbnail.secure_url;
        }

        // Update video
        const updatedVideo = await Video.findByIdAndUpdate(
            videoId,
            { $set: updateData },
            { new: true }
        ).populate('owner', 'username fullName avatar');

        return res.status(200).json(
            new ApiResponse(200, updatedVideo, "Video updated successfully")
        );

    } catch (error) {
        // Clean up uploaded file in case of error (multer file handling)
        if (req.file?.path && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, "Error while updating video");
    }
});

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    try {
        // Find the video
        const video = await Video.findById(videoId);
        if (!video) {
            throw new ApiError(404, "Video not found");
        }

        // Check if user owns the video
        if (video.owner.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to delete this video");
        }

        // Delete video from database
        await Video.findByIdAndDelete(videoId);

        // TODO: Delete video and thumbnail from Cloudinary
        // This would require extracting public_id from the URLs and calling cloudinary.uploader.destroy()

        return res.status(200).json(
            new ApiResponse(200, {}, "Video deleted successfully")
        );

    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, "Error while deleting video");
    }
});

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    try {
        // Find the video
        const video = await Video.findById(videoId);
        if (!video) {
            throw new ApiError(404, "Video not found");
        }

        // Check if user owns the video
        if (video.owner.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to modify this video");
        }

        // Toggle publish status
        const updatedVideo = await Video.findByIdAndUpdate(
            videoId,
            { $set: { isPublished: !video.isPublished } },
            { new: true }
        ).populate('owner', 'username fullName avatar');

        const statusMessage = updatedVideo.isPublished ? "published" : "unpublished";

        return res.status(200).json(
            new ApiResponse(
                200,
                updatedVideo,
                `Video ${statusMessage} successfully`
            )
        );

    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, "Error while toggling publish status");
    }
});

export {
    getAllVideos,
    publishVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}