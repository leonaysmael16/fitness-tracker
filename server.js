// dependencies

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const routesAPI = require("./routes/apiroutes");
const routesHTML = require("./routes/htmlroutes");

// PORT
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));




mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const connected = mongoose.connected;

app.use(require("./routes/apiroutes.js"));
app.use(require("/routes/htmlroutes.js"));

connected.on("Connected", () => {
    console.log('Connected Successfully');
});

app.listen(PORT, () => {
    console.log(`Successfully running on ${PORT}`);
})