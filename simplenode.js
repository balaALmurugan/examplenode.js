var express = require("express");
var app = express();
var port = 8080;
var bodyParser =require('body-parser');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String,
    fatherName: String,
    depart: String
});
var User = mongoose.model("User",nameSchema);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/addname",(req,res)=>{
    var myData=new User(req.body);
    myData.save()
    .then(item =>{
        res.send("Item Saved Successfully");
    })
    .catch(err=>{
        res.status(400).send("Unable to save");
    });
});
app.listen(port,() =>{
    console.log("Servere listening on port"+port);
});
