const adminMiddleWare=async (req,res,next)=>{
    try{
        const adminRole=req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message:"Access denied user is not an Admin."})
        }

        next();
        
    }catch(error){
        next(error);
    }
}
module.exports=adminMiddleWare;

