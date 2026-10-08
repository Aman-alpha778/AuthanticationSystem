import dotenv from "dotenv";

  dotenv.config();


  const config={
             
        PORT:process.env.PORT,
        MONGO_URI:process.env.MONGO_URI,
        TOKEN:process.env.TOKEN

     }

     export default config;
