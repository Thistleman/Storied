const express = require('express');

const Character = require('../database/models/characters.js');
const helpers = require('./helpers.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('./client/build'));

// get information from the database
app.get('/characters/:user', (req, res) => {
  Character.find({})
    .then((data) => res.status(200).send(data))
    .then((data) => console.log('success', data))
    .catch((err) => res.status(400).send(err));
});

// add new information to the database
app.post('/characters/:user', (req, res) => {
  const newChar = req.body;
  newChar._id = helpers.getNextSequenceValue('charid');
  Character.create(newChar)
    .then(() => res.status(200).send('Post Successful!'))
    .then((data) => console.log('success', data))
    .catch((err) => res.status(400).send(err));
});

// update information in the database

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
