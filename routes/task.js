var express = require('express');
var router = express.Router();
var TaskController = require('../controlles/task');
var tc = new TaskController();

//Get all tasks
router.get('/',function(req,res){
  tc.getAll(req,res);
});

//insert task
router.post('/',function(req,res){
  tc.insert(req,res);
});

//finish task
router.put('/:taskId',function(req,res){
  tc.update(req,res);
});

//delete task
router.delete('/:taskId',function(req,res){
  tc.delete(req,res);
});

module.exports = router;
