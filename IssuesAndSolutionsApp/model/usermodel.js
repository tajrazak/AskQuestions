var mongoose=require('mongoose');
module.exports=mongoose.model('users',{

  FirstName:{
    type:String
  },
  LastName:{
    type:String
  },
  Email:{
    type:String,
    unique:true,
    required:true
  },
  Password:{
    type:String,
    required:true
  },
  Dob:{
    type:Date
  }

})
