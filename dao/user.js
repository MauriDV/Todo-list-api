var Database = require('../models/db');

class UserDao {
  constructor(){
    var db = new Database('localhost','root','root','todolist');
    db.connect();
    this.connection = db.connection;
  }
  insert(name,pass,callback){
    this.connection.query("insert into user (username,password) values ('"+name+"','"+pass+"')", function(err,user){
      if(err){
        callback(err);
      }else{
        callback(null,user)
      }
    });
  }

  getAll(callback){
    this.connection.query("select * from user",function(err,users){
      if(err){
        callback(err);
      }else{
        callback(null,users);
      }
    });
  }

  findByUsername(username,callback){
    this.connection.query("select * from user where username=?",username,function(err,user){
      if(err){
        callback(err);
      }else{
        callback(null,user[0]);
      }
    });
  }

  findAllTask(id,callback){
    this.connection.query("select taskId,userTask,taskText, completed from user join task where userTask=userId and userTask=?",id,function(err,tasks){
      if(err){
        callback(err);
      }else{
        callback(null,tasks);
      }
    });
  }
  findTasks(id,completed,callback){
    this.connection.query("select taskId,userTask,taskText, completed from user join task where userTask=userId and userTask=? and completed=?",[id,completed],function(err,tasks){
      if(err){
        callback(err);
      }else{
        callback(null,tasks);
      }
    });
  }
}

module.exports = UserDao;
