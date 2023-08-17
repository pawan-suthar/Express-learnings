// const express = require('express') es5
import express from 'express' //es6
const router  = express.Router()

// student routes
router.get('/all',(req,res)=>{
    res.send("all student")
})
router.post('/create',(req,res)=>{
    res.send("create student")
})
router.put('/update',(req,res)=>{
    res.send("update student")
})
router.delete('/delete',(req,res)=>{
    res.send("delete student")
})

//  module.exports = router old
export default router //new 