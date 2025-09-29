import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

import {
  getAllVideos,
  publishVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus
} from '../controllers/video.controller.js';

const router = Router();

// Public routes (no authentication required)
router.get('/', getAllVideos);
router.get('/:videoId', getVideoById);

// Protected routes (authentication required)
router.use(verifyToken); // All routes below require authentication

router.post('/', upload.single('video'), publishVideo);
router.put('/:videoId', upload.single('thumbnail'), updateVideo);
router.delete('/:videoId', deleteVideo);
router.patch('/:videoId/toggle-status', togglePublishStatus);

export default router;