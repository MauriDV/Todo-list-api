var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');
var UserController = require('../controlles/user');
var uc = new UserController();

//middleware to register user
router.use('/register',function(req,res,next){
	if (req.method=='POST') {
		uc.insert(req,res);
	};
	next();
});

//middleware to login user
router.use('/login',function(req,res,next){
	if (req.method=='POST') {
		var u = new User(req.body.username,req.body.name);
    req.usuario = u;
	};
	next();
});

//get all users
router.get('/',function(req,res){
  uc.getAll(req,res);
});

//Get user logged
router.get('/logged',function(req,res){
	uc.userLogged(req,res);
});

//get all task of user
router.get('/alltasks/:id',function(req,res){
	uc.findAllTasks(req,res);
});

//get task of user
router.get('/tasks/:id/:completed',function(req,res){
	uc.findTasks(req,res);
});

//create user
router.post('/register',passport.authenticate('local-register',{
	successRedirect : "/api/users",
	failureRedirect : '/api/users/register'
}));

//login user
router.post('/login', passport.authenticate('local-login'),function(req,res){
	uc.login(req,res);
});

module.exports = router;
