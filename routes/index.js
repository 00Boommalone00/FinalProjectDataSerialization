var express = require('express');
var router = express.Router();

/* GET home page. 123dddd2331*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
