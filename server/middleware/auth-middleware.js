const jwt=require("jsonwebtoken")
const User=require("../models/user_schema")

const authMiddleWare=async (req,res,next)=>{
 const token=req.header("Authorization");

 if(!token){
    return res.status(401).json({message:"Unauthorized HTTP, Token not provided."});
 }
// console.log("token from auth middleware",token);
const jwtToken=token.replace("Bearer","").trim();

try {
    const isVerified = jwt.verify(jwtToken, process.env.secret_key);
    
    const userData=await User.findOne({email:isVerified.email}).select({password:0});
   
    req.token=token;
    req.user=userData;
    req.userID=userData._id;
    
    next();

} catch (error) {
    res.status(401).json({message:"Unauthorized. Invalid token."});
}

 
};

module.exports=authMiddleWare;