var UserDao = require('../dao/user');
var User = require('../models/user');

class UserController{

  /*
    Constructor
  */
  constructor(){
    this.UserDao = new UserDao();
  }

  /*
    Create user
  */
  insert(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var u = new User(username,password);
    req.usuario = u;
  }

  /*
    Get all users
  */
  getAll(req,res){
    this.UserDao.getAll(function(err,users){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(users);
      }
    });
  }

  /*
    Get user logged
  */
  userLogged(req,res){
    if(req.user){
      res.send(req.user);
    }else{
      res.send({user:'not logged'});
    }
  }

  /*
    Login user
  */
  login(req,res){
    //console.log(req.user);
    var u = {'userId':req.user.userId,'username':req.user.username}
  	req.user = u;
  	//console.log(req.user);
  	res.send(req.user);
  }

  /*
    Get all task of user
  */
  findAllTasks(req,res){
    this.UserDao.findAllTask(req.params.id,function(err,tasks){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(tasks);
      }
    });
  }

  /*
    Get task of users
  */
  findTasks(req,res){
    this.UserDao.findTasks(req.params.id,req.params.completed,function(err,tasks){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(tasks);
      }
    });
  }
}

module.exports = UserController;
