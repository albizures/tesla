var express = require('express');
var controller = require('./config.controller');

var router = express.Router();

router.get('/', controller.getAll);
//router.post('/crear', controller.add);
//router.delete('/:id', controller.delete);
router.put('/', controller.update);

module.exports = router;


