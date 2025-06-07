const mongoose=require("mongoose");
require('dotenv').config();


const url=process.env.MONGO_URI

const connectdb=async()=>{
    try {
        const conn=await mongoose.connect(url);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.log("mongodb connect error:",err);
    }
}

module.exports=connectdb;