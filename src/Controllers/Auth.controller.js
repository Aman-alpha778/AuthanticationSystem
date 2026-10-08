import { create } from "domain";
import userModel from "../Model/Auth.model.js";
import config  from "../config/config.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
 export async function userRegister(req,res) {

    const{username,email,password}=req.body;
    
    const isallreadyexist=await userModel.findOne({

        $or:[
            {username},
            {email}
        ]
    }) 
        if(isallreadyexist){
            res.status(409).json({
                message:"user is already exist"
            })
        }
     const haspassword=crypto.createHash("sha256").update(password).digest("hex")
     const user =await userModel.create({
        username,
        email,
        password
     })
     const token=jwt.sign({ id:user.id },config.TOKEN,{expiresIn:"1d"})

     res.status(201).json({
        message:"user registred successfully"
        ,user:{
            username:user.username,
            email:user.email,
        }
     })


}