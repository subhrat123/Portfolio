const mongoose=require("mongoose");

const contact_schema=new mongoose.Schema({
username:{
type:String,
required:true,
},

    email:{
    type:String,
    required:true,
},

message:{
type:String,
required:false,
},

})

const contacts =new mongoose.model("contacts",contact_schema)

module.exports=contacts;