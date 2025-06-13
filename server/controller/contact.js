const contacts = require("../models/contact_schema");


const contact=async (req,res)=>{
    try{
         const {username,email,message}=req.body;
   await contacts.create({username,email,message});
   
   res.status(200).json({message:"message send successfully"});
    }
    catch(error){
        res.status(500).json({message:"unable send message"})
    }
    
};

module.exports=contact;

