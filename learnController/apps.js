// const express = require('express') es5
import express from 'express' //es6
const app = express()
const port = process.env.PORT || 4000

import stu from './routes/studentroutes.js'

// load router modules
app.use('/student',stu) //student routes

app.get('/',(req,res)=>{
    res.send("Home page ")
})

// other undefined paths 
app.all("*",(req,res)=>{
    res.send("404 no page")
})

// server listen 
app.listen(port,()=>{
    console.log(`server started for controller on http://localhost:${port}`);
})