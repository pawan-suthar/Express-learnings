// teacherroutes.js

// const express = require('express') es5
import express from 'express' //es6
const router  = express.Router()

// teacher routes
router.get('/all',(req,res)=>{
    res.send("all teacher")
})
router.post('/create',(req,res)=>{
    res.send("create teacher")
})
router.put('/update',(req,res)=>{
    res.send("update teacher")
})
router.delete('/delete',(req,res)=>{
    res.send("delete teacher")
})

//module.exports = router old 
export default router //new