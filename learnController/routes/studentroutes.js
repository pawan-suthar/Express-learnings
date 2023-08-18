// studentroutes.js

import express from 'express'
//import Student controller
import {stu_create,stu_delete} from '../controller/studentcontroller.js' 
const router  = express.Router()

// student routes
router.get('/create',stu_create)
router.get('/delete/:id([0-9]{2})',stu_delete)

export default router 