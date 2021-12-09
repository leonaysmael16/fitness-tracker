// dependencies

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const routesAPI = require("./routes/api-routes");
const routesHTML = require("./routes/html-routes");

// PORT
const PORT = process.env.PORT || 3001;
const app = express();



