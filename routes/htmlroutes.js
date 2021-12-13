const route = require("express").Router();
const db = require("../models");
const fs = require("fs");
const path = require("path");

route.get("/", (req, res) =>  {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

route.get("/excercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

});

route.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = route;