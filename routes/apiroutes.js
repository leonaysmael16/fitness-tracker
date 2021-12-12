const Workout = require('../models/workout');
const db = require('../models');
const route = require("express").Router();

// Adding total duration of workout
route.get("/api/workouts", (req, res) => {
    Workout.aggregate([
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

route.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$excercises:duration"},
            },
        },
    ])
    .sort({ _id: -1 })
    .limit(10)
    .then((stats) => {
        res.json(stats);
    })

})

route.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
    .then((newWorkout) => {
        res.json(newWorkout);
    });
});

route.put("/api/workouts/:id", (res, req) => {
    Workout.findbyIdandUpdate(
        req.params.id,
        { $push: { exercises: req.body }},
        { new: true } 
    )
    .then((updateWorkout) => {
        res.json(updateWorkout);
    });
});

module.exports = route;