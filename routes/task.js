var express = require('express');
var router = express.Router();
var Task = require('../models/task');
var TaskController = require('../controlles/task');
var tc = new TaskController();

router.get('/',function(req,res){
  tc.getAll(req,res);
});

router.post('/',function(req,res){
  tc.insert(req,res);
});

router.put('/:taskId',function(req,res){
  tc.update(req,res);
});

router.delete('/:taskId',function(req,res){
  tc.delete(req,res);
});

module.exports = router;
