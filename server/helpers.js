const db = require('../database/index.js');

const helpers = {
  getNextSequenceValue: (sequenceName) => {
    const sequenceDocument = db.counters.findAndModify({
      query: { _id: sequenceName },
      update: { $inc: { sequence_value: 1 } },
      new: true,
    });
    return sequenceDocument.sequence_value;
  },
};

module.exports = helpers;
