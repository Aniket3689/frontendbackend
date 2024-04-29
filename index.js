const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("app get aniket")
});
const port=process.env.PORT ||4000

app.listen(port,()=>{
    console.log(`app listen on ${port}`);
});