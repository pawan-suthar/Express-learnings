import express from 'express'
const app = express()
import createstu from './models/StudentModel.js'
const port = process.env.PORT || 3000
const DB_URL = process.env.DB_URL ||  "mongodb+srv://test:test@expresstesting.3krl0sy.mongodb.net/test?retryWrites=true&w=majority"
import mongoose from "mongoose"

mongoose.connect(DB_URL).then(()=>{
    console.log("mongoDB connected...");
    app.listen(port,()=>{
        console.log(`server started on for mongoose http://localhost:${port}`);
    })
}).catch((error)=>{
    console.log(error);
})

createstu()






