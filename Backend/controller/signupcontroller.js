
const bcrypt=require("bcrypt");
const student = require("../models/student");



const User= require("../Models/User");


const signup = async (req, res) => {
   try {
    const { name, email, student_id,password} = req.body;
    // console.log( "send form p=",name, email, student_id)

    const user = await student.findOne({ student_id });
    // console.log("s idform database",user)
    if (!user) {
        return res.status(400).json({
            message: 'Invalid Student ID',
            success: false
        });
    }

    const existingUser = await User.findOne({ student_id});
    const existingemail=await User.findOne({ email});
    if (existingUser||existingemail) {
        return res.status(409).json({
            message: "User already registered with this Student ID",
            success: false
        });
    }
    const hasPassword = await bcrypt.hash(password, 10);
    const userModel = new User({ name, email, student_id, password: hasPassword });
    console.log( userModel)
    await userModel.save();

    return res.status(201).json({
        message: "Signup successfully",
        success: true
    });
} catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({
        message: "Internal server error",
        success: false
    });
}
}



module.exports = {
    signup
}