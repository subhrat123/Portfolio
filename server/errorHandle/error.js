const errorMiddleware = (err,req,res,next)=>{

    const status = err.status || 500;
    const message = err.message || "some thing went wrong";
    const extraDetails= err.extra || "not found"

    return res.status(status).json({message: message,extraDetails: extraDetails});

}

module.exports= errorMiddleware;