
const express = require('express');
const { connectDb } = require("./database/db");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute=require("./router/contact_route");
const PORT = 3000;
const errors = require("./errorHandle/error");
const contact = require("./controller/contact");
const cors=require("cors");

const corsOptions={
origin:"http://localhost:5173",
method:"GET, POST, DELETE, PATCH, PUT, HEAD", 
credentials:true
}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/", authRoute);
app.use("/",contactRoute);
app.use(errors);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`our server is running on port:${PORT}`);
    });
})
