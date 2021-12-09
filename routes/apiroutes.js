const workout = require('../models/workout');
const db = require('./models');
const route = require("express").Router();

// Adding total duration of workout
route.get("/api/workout", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                durationTotal: {
                    $sum: "$duration.excercise"
                },
            },
        },
    ])
    .then((workout) => {
        res.json(workout);
    });
});

route.post("/api/workout", ({ body }, res) => {
    db.Workout.create({})
    .then((newWorkout) => {
        res.json(newWorkout);
    });
});


module.exports = route;