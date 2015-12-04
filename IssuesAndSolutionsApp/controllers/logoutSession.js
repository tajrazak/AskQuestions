module.exports={
  sessionLogout:function(req,res){
    console.log(req.session)
    req.session.destroy(function(err) {
      res.send({success:true})
    })

  }
}
