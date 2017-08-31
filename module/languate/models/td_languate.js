'use strict';


var mongoose = require('mongoose'),
  Schema = mongoose.Schema ;

  var Td_languate = new Schema({
      code:{
          type: String
      },
      name:{
        type: String
      },
  },{
    collection:'language'
  });

  mongoose.model('td_languate', Td_languate);