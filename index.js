const express = require("express");
const bodyParser = require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    height = Number(req.body.num1);
    weight = Number(req.body.num2);
    result = weight/(height*height);
    console.log(result)
    res.send("Your BMI is" + result);
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})