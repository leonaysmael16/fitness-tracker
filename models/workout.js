const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema. source: https://mongoosejs.com/docs/schematypes.html


const schemaWorkout = new Schema ( 
    {
        day: {
            type: Date,
            default: Date.now
        },

        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Excercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: true
                },
                duration: {
                    type: Number,
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    Number
                },
                distance: {
                    type: Number
                },
            },
        ],
    },
    {
        toJSON: {
            virtuals: true
        },
    }
);

const workout = mongoose.model("Workout", schemaWorkout);

module.exports = workout;