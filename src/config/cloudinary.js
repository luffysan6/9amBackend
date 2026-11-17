import { v2 as cloudinary } from "cloudinary";
import env from "./env.js";



cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_SECRET,
});

async function fileUploader(file) {
  return await cloudinary.uploader.upload(file, {
    resource_type: "image",
    folder: "menuImages",
  });
}

export default fileUploader;
