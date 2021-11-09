const express = require("express");

const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/",function(req,res){

    res.render("home");
});
app.get("/skills",function(req,res){
    res.render("skills");
});

app.get("/experience",function(req,res){
    res.render("experience");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/education",function(req,res){
    res.render("education");
});

app.get("/more",function(req,res){
    res.render("more");
});
app.get("/form",function(req,res){
    res.render("form")
})
app.listen(process.env.PORT||3001,function(){
    console.log("Server is running on port 3001");
})