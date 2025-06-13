const express=require("express");
const app=express()
require('dotenv').config();
const connectdb=require("./config/db")
const cors=require("cors");
const userRoutes = require("./router/loginroute");


const PORT=process.env.PORT||3000;
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use(express.static("upload"));


app.use("/user",userRoutes)

connectdb();
app.listen((PORT),()=>{
    console.log(`server is running on port ${PORT}`) 
})
