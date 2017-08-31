var express = require('express');
var router = express.Router();

//var Td_firstAct = require('mongoose').model('td_firstAct');

/* ---------------------------------------------Start get first Activation ------------------------------*/
router.get('/firstActivation',function(req,res,next){
  console.log('------------------------------------Languate first Activation------------------------------');
  /* Td_firstAct.find('',(err,reponce)=>{
    console.log(reponce);
    res.json(reponce);
  }); */
})

router.get('/saveFirstActivation',function(req,res,next){
  console.log('------------------------------------Save first Activation------------------------------');
 /*  Td_firstAct.save(req.param,(err,reponce)=>{
    console.log(reponce);
    res.json(reponce);
  }); */
})
module.exports = router;