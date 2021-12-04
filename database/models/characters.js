const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Characters = new Schema({
  _id: Number,
  name: String,
  photo: String,
  locations: String,
  events: String,
  appearance: String,
  skills: String,
  relationships: String,
  alignment: String,
  race: String,
  gender: String,
  powerRating: Number,
  ranking: String,
  special: String,
  contracts: String,
  cCapacity: Number,
  fPlans: String,
  personality: String,
  references: String,
  lastUpdate: Date,
});

Characters.pre('find', function () {
  this._startTime = Date.now();
});

Characters.post('find', function () {
  if (this._startTime != null) {
    console.log('Runtime in MS: ', Date.now() - this._startTime);
  }
});

// convert prod id to a number, convert to string when serving to client to save local storage
// investigate nested collections
// shape of data client is expecting

const Character = mongoose.model('Characters', Characters);

module.exports = Character;
