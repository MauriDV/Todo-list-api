var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');
var UserController = require('../controlles/user');
var uc = new UserController();

router.use('/register',function(req,res,next){
	if (req.method=='POST') {
		uc.insert(req,res);
	};
	next();
});

router.use('/login',function(req,res,next){
	if (req.method=='POST') {
		//console.log("HOLA");
		//console.log(req.body);
		var u = new User(req.body.username,req.body.name);
    req.usuario = u;
		//console.log(req.usuario);
	};
	next();
});

router.get('/',function(req,res){
  uc.getAll(req,res);
});

router.get('/logged',function(req,res){
	uc.userLogged(req,res);
});

router.get('/alltasks/:id',function(req,res){
	uc.findAllTasks(req,res);
});

router.get('/tasks/:id/:completed',function(req,res){
	uc.findTasks(req,res);
});

router.post('/register',passport.authenticate('local-register',{
	successRedirect : "/api/users",
	failureRedirect : '/api/users/register'
}));

router.post('/login', passport.authenticate('local-login'),function(req,res){
	uc.login(req,res);
});

module.exports = router;
