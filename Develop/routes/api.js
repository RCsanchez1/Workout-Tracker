const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        //  added runValidators to make sure new exercises meets schema 
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbworkout => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbworkout => {
            console.log(dbworkout)
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});


router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});



module.exports = router;


