require("dotenv").config()

const mongoose = require("mongoose")


const URI = process.env.URI;
// mongoose.connect(URI);

const connectDb = async ()=>{
    try {
       await mongoose.connect(URI);
       console.log("server is running at 3000")
    } catch (error) {
        console.error("db connection failed")
        process.exit(0);
    }
}



module.exports ={connectDb};