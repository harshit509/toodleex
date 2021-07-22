


// express
const express =require("express");
const bodyParser = require('body-parser');

// initializing
const toodle=express();

toodle.use(express.json());
toodle.use(bodyParser.urlencoded({extended : true}));
toodle.use(bodyParser.json());


// database
const database=require("./database/index");

toodle.get("/",(req,res)=>{
  res.sendFile(__dirname + "/toodle.html");
})

toodle.post("/auth",(req,res)=>{
    console.log(username);
    console.log(password);

})


toodle.listen(3000,()=>{ console.log("hello")});