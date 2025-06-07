const express=require("express");
const router=express.Router();

const {loginvalidation,signupvalidation}=require("../middleware/uservalidation")
const { signup } = require('../controller/signupcontroller');
const { login } = require("../controller/logincontroller");



router.post("/signup",signupvalidation,signup);


router.post("/login",loginvalidation,login)






module.exports=router;