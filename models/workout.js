const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema. source: https://mongoosejs.com/docs/schematypes.html


const schemaWorkout = new Schema ( 
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        excercises: [
            {
                type: {
                    type: String,
                    
                    required: "Excercise type"
                },
                name: {
                    type: String,
                    
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
            }]
    },
    {
        toJSON: {
            virtuals: true
        },
    }
);

schemaWorkout.virtual("totalDuration").get(function () {
    return this.excercises.reduce((total, excercise) => {
        return total + excercise.duration; 
    }, 0);
});

const Workout = mongoose.model("Workout", schemaWorkout);

module.exports = Workout;