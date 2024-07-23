const validation = (schema) =>async (req,res,next)=>{
   try{
    const parseBody = await schema.parseAsync(req.body);
    req.body=parseBody;
    next()
}
catch(error){
// res.status(400).json({message: "hey this is subhrat"})
const msg={
    status:400,
    message:error.errors[0].message,
};
console.log(msg);
next(msg);
}
}

module.exports=validation;