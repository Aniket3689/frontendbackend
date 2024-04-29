const express = require("express");
const app=express();

app.get("/jokes",(req,res)=>{
    const Jokes=[
        {
            id:1,
            name:"aniket",
            title:"my Jokes"
        },
        {
            id:2,
            name:"aniket 2",
            title:"my Jokes 2"
        },
        {
            id:3,
            name:"aniket 3",
            title:"my Jokes 3"
        },
        {
            id:4,
            name:"aniket 4",
            title:"my Jokes 4"
        },
        {
            id:5,
            name:"aniket 5",
            title:"my Jokes 5"
        },

    ]
    res.send(Jokes);
});
const port=process.env.PORT ||4000

app.listen(port,()=>{
    console.log(`app listen on ${port}`);
});