import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import prisma from "./config/prisma.js";


dotenv.config();


const app= express();




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// console.log(process.env.DATABASE_URL);
const port= process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(port , (req , res) =>{
    console.log(`Server is running on Port ${port}`)

})