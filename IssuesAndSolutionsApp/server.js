var express=require('express');
var bodyparser=require('body-parser');
var routes=require('./routes.js');
var db=require('./config/config.js');
var mongoose=require('mongoose');
var session=require('express-session');
var app=express();



app.use(bodyparser.json())

app.use(session({
  secret: '1234567890QWERTY',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/public/js"));
app.use(express.static(__dirname+"/public/js/controllers"));
app.use(express.static(__dirname+"/public/js/app"));
app.use(express.static(__dirname+"/public/css"));
app.use(express.static(__dirname+"/public/img"));
app.use(express.static(__dirname+"/public/lib"));
app.use(express.static(__dirname+"/public/fonts"));

db.connect();

process.on('SIGINT', function() {
  db.close();
  process.exit(0);
});


for(r in routes)
{
  app[routes[r].method](routes[r].url,require("./controllers/"+routes[r].controller)[routes[r].action])
}

app.listen(3000,function(){
  console.log("listening 3000");
})
