const workout = require('../models/workout');
const db = require('../models');
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

route.put("/api/workout/:id", (res, req) => {
    db.Workout.findbyIdandUpdate(
        req.params.id,
        { $push: { exercises: req.body }},
        { new: true } 
    )
    .then((updateWorkout) => {
        res.json(updateWorkout);
    });
});

module.exports = route;