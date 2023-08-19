import express from "express";
const router = express.Router();
import { home } from "../controller/home.controller.js";
router.get("/", home);
export default router;
