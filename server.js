import app from "./src/app.js"
import config from "./src/config/config.js"
import ConnectDb from "./src/config/DatabaseCon.js";
 async function startserver() {

    try{
        await ConnectDb();
       app.listen(config.PORT,()=>{
            console.log(`your server starts at port http://localhost:${config.PORT}`);     
        })
    }
    catch(error){
            console.error("cannot connect to the server")
    }
 }
 startserver()
