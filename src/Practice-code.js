const express = require("express");

const application = express();

application.get("", (req, res) => {
    res.send("This is the home page for my website!")
});

application.get("/help", (req, res) => {
    res.send("In this page we can adquire help, if needed")
});

application.get("/about", (req,res) => {
    res.send("This page will give you the history of my website and how it was created")
});

application.listen(3000, () => {
   
});