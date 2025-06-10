const {v2:cloudinary} = require('cloudinary');
const fs = require('fs');
require('dotenv').config();


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const uploadImage = async (filePath)=>{
    try{
        if(!filePath){
            throw new Error("file not exist");
        }
      const response= await cloudinary.uploader.upload(filePath,{resource_type:"auto"});
        
        return response.url;
    }
    catch(err){
        fs.unlinkSync(filePath);// Clean up the file after upload failure
        console.error("Error in uploadImage:", err);
       return null;
    }
}

module.exports=uploadImage;