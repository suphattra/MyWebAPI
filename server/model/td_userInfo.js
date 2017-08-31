'use strict';


var mongoose = require('mongoose'),
  Schema = mongoose.Schema ;

  var Td_UserInfo = new Schema({
      username:{
          type: String
      },
      password:{
        type: String
      },
  },{
    collection:'userInfo'
  });

  mongoose.model('td_userInfo', Td_UserInfo);