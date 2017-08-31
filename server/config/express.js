/*--------------------[Start IMPORT MODULE]-------------------------*/
const express = require('express');
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

/* ------------- [END IMPORT MODULE] ------------ */
/* ------------- [START IMPORT OUR UTIL] ------------ */
var logger = require('../utils/logger');
var db = require('../utils/db');
/* ------------- [END IMPORT OUR UTIL] ------------ */

module.exports = function () {
     var app = express();
     logger.warn("Overriding 'Express' logger");
}
