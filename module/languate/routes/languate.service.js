/*  var express = require('express');
var router = express.Router();

//var Td_languate = require('mongoose').model('td_languate');

*/
/* ---------------------------------------------Start get Languate Default ------------------------------*/
/* router.get('/languateDefault',function(req,res,next){
  console.log('---------------------------------------------Languate Default------------------------------');
   *//* Td_languate.find('',(err,reponce)=>{
    console.log(reponce);
    res.json(reponce);
  }); */
/* }); */
/*
module.exports = router;
 */
//'use strict';
var config = require('../../../app');
var express = require('express');
var router = express.Router();
var languate = require('../controllers/languate.service.controller');
 module.exports = function (app) {

  app.get('/languateDefault',languate.getLanguate);
};
 
