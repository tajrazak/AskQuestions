usermodel=require('../model/usermodel.js');
var session=require('express-session');
var crypto=require('crypto');
module.exports={
  loginPage:function(req,res){

    var decypher=crypto.createCipher("aes192",req.body.password).final("hex")
    console.log(decypher)

    usermodel.find({Email:req.body.username,
      Password:decypher
    },function(err,data){
      if(!err&&data.length!=0)
      {
        //req.session.cookie.maxAge=10000;
        req.session.user_email=req.body.username;
        res.send({success:true});
      }else{
        res.send({success:false});
      }
    })

  }
}
