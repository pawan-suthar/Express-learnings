import express from 'express'
const router = express.Router()
import {home} from '../controller/Homecontroller.js'



router.get('/',home)



export default router