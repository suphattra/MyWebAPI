/*var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var login = false;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(function(req,res,next){
  console.log('Hi');
   next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/', index);
app.use('/users', users);
app.use(function(req,res,next){
  login = true;
  next();
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; */

/*================================================ Test Serve -- By suphs ===============================================================*/
/* ------------- [START SET ENVIRONMENT] ------------ */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
/* ------------- [END SET ENVIRONMENT] ------------ */
/* ------------- [START STORE CONFIG] ------------ */
var config = require('./server/config/config').get(process.env.NODE_ENV);
/* ------------- [END STORE CONFIG] ------------ */
/* ------------- [START IMPORT MODULE] ------------ */
const express = require('express');

const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const fs = require("fs");
var logger = require('./server/utils/logger');
var db = require('./server/utils/db');
//var model = require('./routes/model');
/* ------------- [END IMPORT MODULE] ------------ */
/* ------------- [START IMPORT SSL CONFIG] ------------ */
const privateKey = fs.readFileSync('key1.pem');
const certificate = fs.readFileSync('cert1.pem');
const proxy = require('http-proxy-middleware');
const https = require("https");
const options = {
  key: privateKey,
  cert: certificate
};
/* ------------- [END IMPORT SSL CONFIG] ------------ */

/*--------------[ START ROUTE MODULES]-------------------*/

var index = require('./routes/index');
var users = require('./routes/users');


//var firstAct = require('./module/first_activation/routes/firstAct.service');
//var languate = require('./module/languate/routes/languate.service');

/*--------------[ END ROUTE MODULES]-------------------*/

/* ------------- [START INITIAL OUR APPLICATION] ------------ */
var app = express();
if (process.env.NODE_ENV === 'development') {
  logger.info("Development Environment");
  app.use(morgan("dev", {
    "stream": logger.stream
  }));
} else {
  logger.info("Production Environment");
  app.use(morgan("common", {
    "stream": logger.stream
  }));
}
/* ------------- [END INITIAL OUR APPLICATION] ------------ */

/* ------------- [START view engine setup] ---------------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
/* ------------- [END view engine setup] ---------------- */

/* ------------------- [START USE APPLICATION] ------------ */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/server/dist')));
app.use(config.proxy_root, proxy({
  target: config.proxy_target,
  changeOrigin: true,
  pathRewrite: config.proxy_rewrite,
},db//,model
));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req,res,next){
   next();
});

app.use(express.static(path.join(__dirname, 'dist')));

/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); */

app.use('/', index);
//app.use('/', firstAct);
//app.use('/',languate);

app.use(function(req,res,next){
  login = true;
  next();
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//https.createServer(options, app).listen(config.web_port);
//logger.info('Web-App is running on port : ' + config.web_port);
/* ------------- [END INITIAL OUR APPLICATION] ------------ */
/* ------------- [START EXPORT OUR MODULE] ------------ */
module.exports = app;
/* ------------- [END EXPORT OUR MODULE] ------------ */
