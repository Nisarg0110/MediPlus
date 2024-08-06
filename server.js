console.log("ok");

const express = require("express");
const path=require("path");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");


const connectDB = require("./config/conn");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

// ----------------------- //

const app=express();
app.use(express.json());
app.use(moragan("dev"));



app.get("",(req,res)=>{
    res.send("hello");
});


app.listen(8000,()=>{
    console.log("Server Running at port no 8000");
});