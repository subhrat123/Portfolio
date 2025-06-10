const mongoose = require('mongoose');

const skillsSchema=new mongoose.Schema({
    url:String,
    name: String,
    description:String,
})

module.exports= mongoose.model('Skills', skillsSchema);