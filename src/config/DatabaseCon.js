import mongoose from "mongoose";
import config from "./config.js";

async function ConnectDb() {

      try{
            
       await mongoose.connect(config.MONGO_URI);
        console.log("database connection successful");
        

      }
      catch(error){
        console.error("connection failed",error.massage);
      }
    
}
export default ConnectDb;