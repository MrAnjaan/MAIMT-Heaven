const mongoose=require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true,
        unique: true
    },
     student_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
        }
    }) 
    // const User = mongoose.model("User",userSchema);
    // module.exports={User}

module.exports=mongoose.model("User",userSchema);