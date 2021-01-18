//Router
var express = require('express');
var router = express.Router();
var authorisation = require('../libraries/authLibrary.js');

router.post('/isAuthorised',  [authorisation.checkAuthorisation], (req, res, next) => {
    res.send({});
}, function(req, res, next) {
   res.status(200);
  });

module.exports = router;
