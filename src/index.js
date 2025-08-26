const express=require('express');
const {PORT}=require('./config/serverConfig');
require('dotenv').config();


const SetupAndStartServer=async()=>{

    const app=express();
    const PORT=3000;

    app.listen(PORT,()=>{
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
        // console.log("object",process)
    })

}

SetupAndStartServer();