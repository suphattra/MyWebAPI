var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Suphattra' });
});

router.get('/login',function(req,res,next){
  res.json({ message: 'Hi, From Entonica'})
})

router.get('/ads',function(req,res,next){
  res.json({ message: 'Hi, From Entonica'})
})
module.exports = router;
