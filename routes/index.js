var express = require('express');
var router = express.Router();


/*--------------------------------------------------- Start Table ------------------------------------*/
var Td_languate = require('mongoose').model('td_languate');
var Td_firstAct = require('mongoose').model('td_firstAct');
var Td_UserInfo = require('mongoose').model('td_userInfo');


/* ---------------------------------------------------GET home page. ----------------------------------*/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Suphattra' });
});


/* -------------------------------------------------Start get user login ------------------------------*/
router.post('/user/login', function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  console.log('Sign in : ' + username + password);
  res.json({ signin: 1 })
})

/* ---------------------------------------------Start save first activation ------------------------------*/
router.get('/login', function (req, res, next) {
  console.log('ggggggggggggggg');
  res.json(reponce);
  // nameLogin= "";
  /* statusArray =[
     {name:'kik',tel:'0881476630',email:'a@hotmail.com'}
     ,{name:'terk',tel:'0881476631',email:'b@hotmail.com'}
     ,{name:'art',tel:'0881476632',email:'c@hotmail.com'}
     ,{name:'non',tel:'0881476633',email:'d@hotmail.com'}
     ,{name:'may',tel:'0881476634',email:'e@hotmail.com'}
   ]*/

  /*testArrayObj = [
     {name:"a",tel:"0",email:"a@hotmail.com"},
     {name:"b",tel:"1",email:"b@hotmail.com"},
     {name:"c",tel:"2",email:"c@hotmail.com"}
  ];
  testArray = ["0","1","2"];
  testObj = {name : 'a', value : "b"};
  console.log(testArray[0]);
  console.log(testObj.name);
  console.log(testArrayObj[0].name);
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log('---------------------------------------------------------------------------------------------------------');  
  res.json(testArrayObj);*/

  //  Td_languate.find((err,testArrayObj) => {
  //let param = {code:'THA'};
  /*  Td_languate.find('',(err,reponce)=>{
     console.log(reponce);
     res.json(reponce);
   });
    */
  //  });
});

/* ---------------------------------------------Start get Languate Default ------------------------------*/
router.get('/languageDefault', function (req, res, next) {
  console.log('---------------------------------------------Languate Default------------------------------');
  Td_languate.find('',(err,reponce)=>{
   console.log(reponce);
  res.json(reponce);
//  res.setHeader('Content-Type', 'application/json');
 // res.send(JSON.stringify({ a: 1 }));

  }); 
});

/* ---------------------------------------------Start get first Activation ------------------------------*/
router.get('/firstActivation', function (req, res, next) {
  console.log('------------------------------------ first Activation------------------------------');
  console.log(req.query.requestID);
  var data = req.query;
  console.log('data :');
  console.log(data);
  Td_firstAct.find(data).exec(function (err, docs) {
    if (err) {
      docs.responseCode = 404;
      docs.responseDescription = err;
      res.json(docs);
      console.log('err:::::' + docs.responseCode + docs.responseDescription);
    } else {
      docs.responseCode = 200;
      res.json(docs);
    }
  });
  /* 
     if(req.query.requestID){
        data.requestID = req.query.requestID;
      } 
     */

  /* Td_firstAct.find(
   {
    // reqlist
   //  requestID:req.query.requestID?req.query.requestID:null,
   //  simSerialNo:req.query.simSerialNo?req.query.simSerialNo:null,
    // projectName:req.query.projectName,
    // simSerialNo:req.query.simSerialNo
     
   }, 
   (err,reponce)=>{//req.query._id
     result = 200;
     if(err){
       reponce.responseCode = 404;
       reponce.responseDescription = err;
       res.json(reponce);
       console.log('err:::::' + reponce.responseCode + reponce.responseDescription);
     }else{
       reponce.responseCode =200;
       res.json(reponce);
     }
 });  */
})


/* ---------------------------------------------Start Save first Activation ------------------------------*/
router.get('/saveFirstActivation', function (req, res, next) {
  console.log('------------------------------------Save first Activation------------------------------');
  console.log(req.query.projectName);
  let result = [];

  Td_firstAct.collection.save({
    _id: req.query.projectName,
    projectName: req.query.projectName,
    refMemo: req.query.refMemo,
    mobileNo: req.query.mobileNo,
    simSerialNo: req.query.simSerialNo,
    cacCode: req.query.cacCode,
    defaultLanguage: req.query.defaultLanguage,
    smsLanguage: req.query.smsLanguage,
    ivrLanguage: req.query.ivrLanguage,
    emailLanguage: req.query.emailLanguage,
    ussdLanguage: req.query.ussdLanguage,
    requestID: req.query.requestID,
    requestDate: req.query.requestDate,
    requester: req.query.requester,
    status: req.query.status,
    createBy: req.query.createBy,
    createDate: req.query.createDate,
    updateBy: req.query.updateBy,
    updateDate: req.query.updateDate,

  }, (err, reponce) => {
    if (err) {
      result.responseCode = 404;
      result.responseDescription = err;
      res.json(result);
      console.log('err:::::' + result.responseCode + result.responseDescription);
    } else {
      result = 'success'
      /*    result=[{
            "responseCod" :"200"
          },
          {
            "responseDescription" : "success"
          }
        ] */
      /* result.responseCode = 200;
      result.responseDescription = 'success'; */
      res.json(result);
      console.log('result :: ' + result);
    }
  })
})

/* ---------------------------------------------Start Save first Activation ------------------------------*/
router.get('/updateFirstActivation', function (req, res, next) {
  console.log('------------------------------------Update first Activation------------------------------');
});

router.get('/userLogin',function(req, res, next){
  console.log('-----------------------------------User Login------------------------------');
    console.log('------------------------------------ first Activation------------------------------');
  console.log(req.query.requestID);
  var data = req.query;
  console.log('data :');
  console.log(data);
  Td_UserInfo.find(data).exec(function (err, docs) {
    if (err) {
      docs.responseCode = 404;
      docs.responseDescription = err;
      res.json(docs);
      console.log('err:::::' + docs.responseCode + docs.responseDescription);
    } else {
      docs.responseCode = 200;
      res.json(docs);
    }
  });
})


module.exports = router;
