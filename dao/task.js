var Database = require('../models/db');

class TaskDao {
  constructor(){
    var db = new Database('localhost','root','root','todolist');
    db.connect();
    this.connection = db.connection;
  }
  insert(user,content,completed,callback){
    this.connection.query("insert into task (userTask,taskText,completed) values ('"+user+"','"+content+"','"+completed+"')", function(err,task){
      if(err){
        callback(err);
      }else{
        callback(null,task);
      }
    });
  }
  getAll(callback){
    this.connection.query("select * from task",function(err,tasks){
      if(err){
        callback(err);
      }else{
        callback(null,tasks);
      }
    });
  }
  update(taskId,callback){
    this.connection.query("update task set completed=? where taskId=?",[1,taskId],function(err,task){
      if(err){
        callback(err);
      }else{
        callback(null,task);
      }
    });
  }
  delete(taskId,callback){
    this.connection.query('delete from task where taskId=?',taskId,function(err,msg){
      if(err){
        callback(err);
      }else{
        callback(null,msg);
      }
    });
  }
}

module.exports = TaskDao;
