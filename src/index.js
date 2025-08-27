const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');
require('dotenv').config();


const SetupAndStartServer=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // const PORT=3000;

    app.listen(PORT,()=>{
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
        // console.log("object",process)
    })

}

SetupAndStartServer();