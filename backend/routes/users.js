const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/register').post((req, res) => { // Update the route to '/register'
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });

  newUser.save()
    .then(() => res.json('User registered successfully!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;
