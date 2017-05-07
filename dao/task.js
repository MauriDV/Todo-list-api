var Database = require('../models/db');

class TaskDao {

  /*
    Constructor
  */
  constructor(){
    var db = new Database('localhost','root','root','todolist');
    db.connect();
    this.connection = db.connection;
  }

  /*
    Insert task into database
    params: owner,content of task and if task is completed
  */
  insert(user,content,completed,callback){
    this.connection.query("insert into task (userTask,taskText,completed) values ('"+user+"','"+content+"','"+completed+"')", function(err,task){
      if(err){
        callback(err);
      }else{
        callback(null,task);
      }
    });
  }

  /*
    Get all task
  */
  getAll(callback){
    this.connection.query("select * from task",function(err,tasks){
      if(err){
        callback(err);
      }else{
        callback(null,tasks);
      }
    });
  }

  /*
    Finish task
    params: id of task
  */
  update(taskId,callback){
    this.connection.query("update task set completed=? where taskId=?",[1,taskId],function(err,task){
      if(err){
        callback(err);
      }else{
        callback(null,task);
      }
    });
  }

  /*
    Delete task
    params: id of task
  */
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
