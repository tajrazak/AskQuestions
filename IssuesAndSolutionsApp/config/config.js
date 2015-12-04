var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/IssuesDB');

module.exports={
  connect:function(){
    mongoose.connection.once('connected',function(){
      console.log('connected');
    })
  },
  close:function(){
    mongoose.connection.close(function(){
      console.log("closed");
    })
  }
}
