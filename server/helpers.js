const db = require('../database/index.js');
const Character = require('../database/models/characters.js');

const helpers = {
  getNextSequenceValue: (sequenceName) => db.collection('counters').findOneAndUpdate({
    _id: sequenceName,
  }, {
    $inc: {
      sequence_value: 1,
    },
  }, {
    sort: {
      sequence_value: 1,
    },
  }).then((data) => data.value.sequence_value),
};

module.exports = helpers;
