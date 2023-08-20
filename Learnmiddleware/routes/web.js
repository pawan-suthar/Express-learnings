//router/web.js

import express from "express"
const router = express.Router()
import { indexcontroller } from "../controller/indexController.js"
import { aboutcontroller } from "../controller/aboutcontroller.js"

// import middleware
// import mid from "../middleware/mid.js"

router.get("/",indexcontroller) // router level middleware
router.get("/about",aboutcontroller)

export default router