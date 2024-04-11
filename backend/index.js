const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Database Connection with MOngoDB

mongoose.connect("mongodb+srv://kamblesanghpal2003:0LzUKHtLIjUr5Ptk@cluster0.buwrsva.mongodb.net/e-commerce")

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})
app.listen(port,(error)=>{
    if (!error){
        console.log("server Running on Port"+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})