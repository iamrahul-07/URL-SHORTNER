//USER MODEL - SCHEMA DESIGN

import mongoose, {Schema} from "mongoose";
const userSchema=new Schema({
    'email':{type:String, required:[true, "Email is required"], unique:true},
    'password':{type:String, minLength:8, required: true},
    'name':{type:String}
});
export const userModel=mongoose.model('users', userSchema);