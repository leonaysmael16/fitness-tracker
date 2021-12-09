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

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use(routesAPI);
app.use(routesHTML);


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

connected.on("Connected", () => {
    console.log('Connected Successfully');
});

app.listen(PORT, () => {
    console.log(`Successfully running on ${PORT}`);
})