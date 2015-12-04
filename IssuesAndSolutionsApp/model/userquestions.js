var mongoose=require('mongoose');
module.exports=mongoose.model('Questions',{
  Question_title:{
    type:String
  },
  Question_summary:{
    type:String
  },
  PostedBy:mongoose.Schema.Types.ObjectId,
  ref:'users'

})
