var TaskDao = require('../dao/task');
var task = require('../models/task');

class TaskController{
  constructor(){
    this.TaskDao = new TaskDao();
  }
  insert(req,res){
    console.log(req.body.user);
    console.log(req.body.contenido);
    console.log(req.body.completed);
    this.TaskDao.insert(req.body.user,req.body.contenido,req.body.completed,function(err,task){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(task);
      }
    });
  }
  getAll(req,res){
    this.TaskDao.getAll(function(err,tasks){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(tasks);
      }
    });
  }
  update(req,res){
    this.TaskDao.update(req.params.taskId,function(err,task){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(task);
      }
    });
  }
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
