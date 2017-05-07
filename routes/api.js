var express = require('express');
var router = express.Router();

//Routes of users and tasks
var user = require('./user');
var task = require('./task');

//Internal routes of /api
router.use('/users',user);
router.use('/tasks',task);

module.exports = router;
