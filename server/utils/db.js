// Logger for run DB
const logger = require('./logger');
// Database
const mongo = require('mongodb');
// Bring Mongoose into the app
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Build the connection string
var config = require('../config/config').get(process.env.NODE_ENV);
// Create the database connection

function connectDB() {
  mongoose.connect(config.database, {
    server: {
      auto_reconnect: true
    }
  });
}

connectDB();

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  // logger.info('Mongoose default connection open to ' + dbURI);
  logger.info('Mongoose default connection success');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  logger.error('Mongoose default connection error: ' + err);
  mongoose.connection.close(function () {
    logger.info('Mongoose auto reconnect every 5000 ms : ');
    setTimeout(connectDB, 5000);
  });
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  logger.warn('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    logger.info('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// BRING IN YOUR SCHEMAS & MODELS // For example
require('../model/td_languate');
require('../model/td_firstAct');
require('../model/td_userInfo');
//require('../../module/first_activation/routes/firstAct.service');
//require('../../module/languate/routes/languate.service');
//require('../../module/first_activation/models/td_firstAct');
//require('../../module/languate/models/td_languate');
//var firstAct = require('./module/first_activation/routes/firstAct.service');
// require('../model/distChn');
// require('../model/chnSales');

/*---BRING IN YOUR  SCHEMAS & MODELS IN MODULE---*/
//require('../../routes/model');
// ใน folder มี routes และมีไฟล์ model.js ซึ่งเป็น module ที่เป็นตัวเชื่อมการเรียก module 

