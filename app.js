const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const request = require("request");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(express.static("public"));

const https = require("https");
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

app.post("/form", function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.Address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const phonenumber = req.body.number;
    const message = req.body.message;
    
    

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                    PHONE: phonenumber,
                    ADDRESS: {
                        addr1: address,
                        city: city,
                        state: state,
                        zip: zip
                    },
                    TEXT:message,
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    const url = "https://us5.api.mailchimp.com/3.0/lists/978d5fe682";

    const options = {
        method: "POST",
        auth: "Hasan_1605:a5dbcda099f748717ee5dd061e7e7882-us5"
    }

    const request = https.request(url, options, function (response) {
        if(response.statusCode == 200){
            res.sendFile(__dirname + "/success.html"); 
        }
        else{
            res.sendFile(__dirname + "/failure.html"); 
        }
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });
    
    });

    request.write(jsonData);
    request.end();
    
});
app.listen(process.env.PORT||3001,function(){
    console.log("Server is running on port 3001");
});