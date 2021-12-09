const route = require("express").Router();
const path = require("path");

route.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

route.get("/excercise", (_req, res) => {
    res.sendFile(path.join(__dirname, "./public/excercise.html"));

});

route.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

module.exports = route;