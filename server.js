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
var Task = require('./models/task');
var UserController = require('./controlles/user');
var UserDao = require('./dao/user');
var TaskController = require('./controlles/task');
var TaskDao = require('./dao/task');

var ud = new UserDao();
var uc = new UserController();
var td = new TaskDao();
var tc = new TaskController();

//Connect with the database
var db = new Database('localhost','root','root','todolist');
db.connect();

//Create express app
var app = express();

//Run server
var server = http.createServer(app);
server.listen(8080,function(){
  console.log("Server running on port 3000");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

//to passport
passport.serializeUser(function(user,done){
  done(null,user);
});

passport.deserializeUser(function(user,done){
  done(null,user);
});

//REGISTER
passport.use(
  'local-register',
  new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback : true
  },
  function(req,name,password,done){
    ud.insert(req.usuario.username,req.usuario.password,function(err,user){
      if(err){
        done(err)
      }else{
        done(null,user);
      }
    });
  })
);

//LOGIN
passport.use(
  'local-login',
  new LocalStrategy({
    usernameField:'username',
    passwordField:'name',
    passReqToCallback: true
  },
  function(req,username,password,done){
    ud.findByUsername(req.usuario.username,function(err,user){
      if(err){
        done(err);
      }else{
        done(null,user);
      }
    });
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  secret:'keyboard cat',
  key:'sid'
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

var api = require('./routes/api');

app.use('/api',api);
