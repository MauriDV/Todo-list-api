var TaskDao = require('../dao/task');
var task = require('../models/task');

class TaskController{

  /*
    Constructor
  */
  constructor(){
    this.TaskDao = new TaskDao();
  }

  /*
    insert task
  */
  insert(req,res){
    this.TaskDao.insert(req.body.user,req.body.contenido,req.body.completed,function(err,task){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(task);
      }
    });
  }

  /*
    Get all tasks
  */
  getAll(req,res){
    this.TaskDao.getAll(function(err,tasks){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(tasks);
      }
    });
  }

  /*
    Finish task
  */
  update(req,res){
    this.TaskDao.update(req.params.taskId,function(err,task){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(task);
      }
    });
  }

  /*
    Delete task
  */
  delete(req,res){
    this.TaskDao.delete(req.params.taskId,function(err,msg){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(msg);
      }
    })
  }
}

module.exports = TaskController;
