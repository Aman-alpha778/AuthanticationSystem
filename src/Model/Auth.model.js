import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
      
     username:{
        type:String,
        required:[true,"the username is require"],
        unique:[true,"the username must be unique"]
     },

     email:{
            type:String,
            required:[true,"email should be required"],
            unique:[true,"email must be unique"]
     },
     password:{
        type:String,
        required:[true,"password must be required"]
     }

})

const userModel=mongoose.model("users",userSchema);
export default userModel;