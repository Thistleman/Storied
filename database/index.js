const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/Storied';

mongoose.connect(mongoUri, {
  connectTimeoutMS: 60000,
});

const db = mongoose.connection;

module.exports = db;
