usermodel=require('../model/usermodel.js');
var crypto=require('crypto');

db=require('../config/config.js');
module.exports={
  signup:function(req,res){
    var cipher = crypto.createCipher("aes192", req.body.Password).final("hex");
    console.log(cipher)
    var user=new usermodel({

      FirstName:req.body.Firstname,
      LastName:req.body.Lastname,
      Email:req.body.Email,
      Password:cipher,
      Dob:req.body.dob

    })

    user.save(function(err,data){
      if(!err)
      {
        res.send({success:true});
      }else {
        res.send({success:false})
      }
    })

  }

}
