import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'   // node js provide fs on their own we don't need to b install (File System)



cloudinary.config({
     cloud_name: "dyr8pvtyq",
     api_key: "268754762784447",
     api_secret: "n7fY6iWevoAMnfdbk71c7zIUu58"
});

const uploadOnCloudinary = async (localFilePath) => {
     try {
          if (!localFilePath) return null
          const response = await cloudinary.uploader.upload(localFilePath, {
               resource_type: "auto"
          })
          return response;
     } catch (error) {
          console.error("Cloudinary upload error:", error);
          if (fs.existsSync(localFilePath)) {
               fs.unlinkSync(localFilePath);
          }
          console.error("Local file deleted after upload error:", localFilePath);
          return null;
     }
}

export { uploadOnCloudinary }