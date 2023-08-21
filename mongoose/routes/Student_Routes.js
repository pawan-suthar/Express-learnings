import express from 'express'
const router  = express.Router()
import {allstudent,home,serchstudentbyid,createstudent,updatestudentbyid,deletestudentbyid} from '../controller/Student_Controller.js'

router.get('/',home)
router.post('/create-student',createstudent)
router.get('/all-stu',allstudent)
router.get('/all-stu/:id',serchstudentbyid)
router.put('/update-stu/:id',updatestudentbyid)
router.delete('/delete-stu/:id',deletestudentbyid)



export default router


