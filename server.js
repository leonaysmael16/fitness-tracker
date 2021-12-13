// dependencies

const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const dotenv = require('dotenv');
// const apiRoutes = require('../routes/apiroutes');
// const htmlRoutes = require('../routes/htmlroutes')



// PORT
const PORT = process.env.PORT || 3501;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/htmlroutes.js"));
app.use(require("./routes/apiroutes.js"));
// app.use("/",apiRoutes);
// app.use("/",htmlRoutes);




mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workouts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );





app.listen(PORT, () => {
    console.log(`Successfully running on ${PORT}`);
});