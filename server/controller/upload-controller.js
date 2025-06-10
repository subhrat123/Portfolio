
const uploadImage =require('../util/cloudinary.js');

const uploadImg= async (req,res)=>{
try{
    const filePath=req.file.path;
    console.log("File path:", filePath);
    if(!filePath){
        console.error("No file found in request");
        return res.status(400).json({message:"no file found"});
    }
    const ImgUrl=await uploadImage(filePath);
    if(!ImgUrl){
        return res.status(500).json({message:"unable to upload image"});
    }
    console.log("Image URL:", ImgUrl);
    res.status(200).json(ImgUrl);
}catch(error){
    console.error("Error in uploadImg:", error);
    res.status(500).json({message:"internal server error"});
}
}
module.exports=uploadImg;