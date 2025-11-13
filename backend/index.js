import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables before importing Prisma
dotenv.config();

// Import Prisma after dotenv so DATABASE_URL is available during module init
const prismaModule = await import("./config/prisma.js");
const prisma = prismaModule.default;


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