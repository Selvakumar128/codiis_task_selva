import mongoose from "mongoose";

const User=mongoose.model('User',new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    mobileNum:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }    
}));

export default User;
