var http = require('http');
var express = require('express');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var Database = require('./models/db');
var User = require('./models/user');

//Connect with the database
var db = new Database('localhost','root','root','todolist');
db.connect();

//Create express app
var app = express();

//Run server
var server = http.createServer(app);
server.listen(3000,function(){
  console.log("Server running on port 3000");
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret:'keyboard cat',
  key:'sid'
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/ping',function(req,res){
  res.send('pong');
});
