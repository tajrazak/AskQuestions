usermodel=require('../model/usermodel.js');
module.exports={
  checkSession:function(req,res){
    //console.log(req.session.user_email)
    usermodel.find({Email:req.session.user_email},function(err,data){
      if(!err&&data.length!=0)
      {
        res.send([{success:true}]);
      }else{
        res.send([{success:false}])
      }
    })
  }
}
