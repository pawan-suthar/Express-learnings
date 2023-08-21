import express from 'express'
const app = express()
import cors from 'cors'
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000
const DB_URL = process.env.DB_URL ||  "mongodb+srv://test:test@crud.xcyz967.mongodb.net/CRUD?retryWrites=true&w=majority"
import mongoose from "mongoose"
import studentrouter from './routes/Student_Routes.js'


app.use('/',studentrouter)

mongoose.connect(DB_URL).then(()=>{
    console.log("mongoDB connected...");
    app.listen(port,()=>{
        console.log(`server started on for mongoose http://localhost:${port}`);
    })
}).catch((error)=>{
    console.log(error);
})








