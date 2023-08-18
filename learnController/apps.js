// const express = require('express') es5
import express from 'express' //es6
const app = express()
const port = process.env.PORT || 4000
// const stu = require('./routes/studentroutes') es5
// const tea = require('./routes/teacherroutes')

import stu from './routes/studentroutes.js' //es6
import tea from './routes/teacherroutes.js'
import test from "./routes/pararaoutesexamples.js"
import str from "./routes/queryStringexamples.js"

// load router modules
app.use('/student',stu) //student routes
app.use('/teacher',tea) // teacher router
app.use('/test',test) // testing routing parameters
app.use('/str',str) // test  query parameters


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