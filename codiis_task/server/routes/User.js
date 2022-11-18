import express from "express";
import User  from "../controller/User.js"

const router=express.Router()
router.post('/reg',User.register)
router.get('/stdt',User.userDetails)
router.post('/login',User.Login)
router.post('/upload',User.Upload)

export default router;