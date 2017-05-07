var UserDao = require('../dao/user');
var User = require('../models/user');

class UserController{
  constructor(){
    this.UserDao = new UserDao();
  }
  insert(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var u = new User(username,password);
    req.usuario = u;
  }
  getAll(req,res){
    this.UserDao.getAll(function(err,users){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(users);
      }
    });
  }
  userLogged(req,res){
    console.log(req.user);
    if(req.user){
      res.send(req.user);
    }else{
      res.send({user:'not logged'});
    }
  }
  login(req,res){
    //console.log(req.user);
    var u = {'userId':req.user.userId,'username':req.user.username}
  	req.user = u;
  	//console.log(req.user);
  	res.send(req.user);
  }
}

module.exports = UserController;
