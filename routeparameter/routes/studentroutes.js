// studentroutes.js

// const express = require('express') es5
import express from 'express' //es6
const router  = express.Router()

// student routes
router.get('/',(req,res)=>{
    res.send("student home page ")
})
router.get('/all',(req,res)=>{
    res.send("all student")
})

//get student name by parameter
router.get('/all/:name/:age',(req,res)=>{
    console.log(req.params);
    // destructure
    const {name,age} = req.params
    res.send(`student name is ${name} and age is ${age}`)
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
// delete by id 
router.delete('/delete/:id',(req,res)=>{
    console.log(req.params);
    res.send(`delete student ${req.params.id}`)
})

//  module.exports = router old
export default router //new 