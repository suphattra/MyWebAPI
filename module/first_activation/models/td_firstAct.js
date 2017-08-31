'use strict';


var mongoose = require('mongoose'),
  Schema = mongoose.Schema ;

  var Td_firstAct = new Schema({
        requestID:{
            type: String
        }, 
        requestDate:{
          type: Date
        },
        requester:{
          type: String
        },
        contactNo:{
          type: String
        },
        location:{
          type: String
        },
        projectName:{
          type: String
        },
        refMemo:{
          type: String
        },
        memoName:{
          type: String
        },
        mobileNo:{
          type: String
        },
        simSerialNo:{
          type: String
        },
        cacCode:{
          type: String
        },
        defaultLanguage:{
          type: String
        },
        smsLanguage:{
          type: String
        },
        ivrLanguage:{
          type: String
        },
        emailLanguage:{
          type: String
        },
        ussdLanguage:{
          type: String
        },
        requestType:{
          type: String
        },
        total:{
          type: String
        },
        status:{
          type: String
        },
        createBy:{
          type: String
        },
        createDate:{
          type: Date
        },
        updateBy:{
          type: String
        },
        updateDate:{
          type: Date
        }

      
      
        


  },{
    collection:'firstActivation'
  });

  mongoose.model('td_firstAct', Td_firstAct);