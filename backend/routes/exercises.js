const router = require('express').Router();
let Exercise = require('../models/exercise.model');


const Exercise = require('../models/exercise.model');

Exercise.find()
  .then((exercises) => {
    console.log(exercises);
    // Process or display the exercises data as needed
  })
  .catch((err) => {
    console.log('Error:', err);
  });


router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/data').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
   const newExercise = new Exercise({
        username,
        email,
	    password,
   });

   newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router; 