import { Router  } from "express";
import * as Authcontroller from "../Controllers/Auth.controller.js"

const Authrouter=Router();

Authrouter.get("/userRegister",(req,res)=>{
   
    res.send("wellcome to the server");

})
Authrouter.post("/Register",Authcontroller.userRegister);

export default Authrouter;
