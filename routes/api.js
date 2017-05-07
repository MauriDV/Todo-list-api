var express = require('express');
var router = express.Router();

var user = require('./user');
var task = require('./task');

router.use('/users',user);
router.use('/tasks',task);

module.exports = router;
