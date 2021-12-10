const route = require("express").Router();
const db = require("../models");
const fs = require("fs");
const path = require("path");

route.get("/", function(req, res)  {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

route.get("/excercise", function(req, res){
    res.sendFile(path.join(__dirname, "./public/excercise.html"));

});

route.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

module.exports = route;