// const express = require('express') es5
import express from 'express' //es6
const app = express()
const port = process.env.PORT || 4000

import web from './routes/web.js'

// load router modules
app.use('/',web) 


// other undefined paths 
app.all("*",(req,res)=>{
    res.send("404 no page")
})

// server listen 
app.listen(port,()=>{
    console.log(`server started for views on http://localhost:${port}`);
})