const joi=require("joi")


const loginvalidation=(req,res,next)=>{
    const schema=joi.object({
        
        email:joi.string().email().required(),
        student_id:joi.string().min(2).max(9).required(),
        password: joi.string().min(5).required()
})
const {error}=schema.validate(req.body)
if(error)
    return res.status(400).json({message:"bad request",error})
next();
}



const signupvalidation=(req,res,next)=>{
    const schema=joi.object({

        name:joi.string().min(3).max(20).required(),
        email:joi.string().email().required(),
        student_id:joi.string().min(2).max(9).required(),
        password: joi.string().min(5).required()
})
const {error}=schema.validate(req.body)
if(error)
    return res.status(400).json({message:"bad request",error})
next();
}
module.exports={
    loginvalidation,
    signupvalidation
}