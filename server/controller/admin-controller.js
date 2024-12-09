const User=require('../models/user_schema');
const Contacts=require('../models/contact_schema');


const getAllUsers=async (req,res)=>{

    try{
        const user=await User.find({},{password:0});
        if(!user || user.length===0) {
            return res.status(404).json({message:"error getting user in admin-controller"})
        }
       return res.status(200).json(user);
    }catch(error){
        console.log("error from admin-controller");
        next(error);
    }
}

const getAllContacts=async (req,res)=>{
    try{
        const contacts=await Contacts.find();
        console.log(contacts);
        if(!contacts || contacts.length===0)
            return res.status(404).json({message:"no contacts found..."})
    return res.status(200).json(contacts);
    }catch(error){
        console.log("error in getAllContacts..");
        next(error);
    }
}

const deleteUser=async (req,res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({msg:"user deleted successfully"});
        
    } catch (error) {
        next(error);
    }
}

// const updateUser=async (req,res)=>{

// }

module.exports={getAllUsers,getAllContacts, deleteUser};