const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const connection_string = process.env.ATLAS_URI;
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection established.'))
  .catch((error) => console.error('MongoDB connection failed:', error.message));

app.post('/registerUser', (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error:' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
