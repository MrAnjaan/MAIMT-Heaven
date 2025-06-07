const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

const student = require("../models/student");

const bcrypt=require("bcrypt");



const login = async (req, res) => {
    try {
        const { name, email, student_id,password} = req.body;
    
        const user = await UserModel.findOne({ student_id,email});

        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403)
            .json({ message: errorMsg, success: false });
            }
            
            const jwtToken = jwt.sign(
            { email: user.email, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email: user.email,
                name: user.name,
                student_id: user.student_id
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    login
}