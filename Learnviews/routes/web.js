import express from 'express'
const router = express.Router()

//import controllers
import {about} from '../controller/about.js'
import {home} from '../controller/home.js'

//make routes
router.get('/',home)
router.get('/about',about)


export default router