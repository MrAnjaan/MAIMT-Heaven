const express=require("express");
const router=express.Router();


const upload=require("../middleware/multer");

const {loginvalidation,signupvalidation}=require("../middleware/uservalidation")
const { signup } = require('../controller/signupcontroller');
const { login } = require("../controller/logincontroller");

const{ uploadData }=require("../controller/uploadcontroller")

const {resource}=require("../controller/resourcecontroller")



router.post("/signup",signupvalidation,signup);


router.post("/login",loginvalidation,login);


router.post("/resource",resource);

router.post("/upload",upload.single("file"),uploadData);



module.exports=router;