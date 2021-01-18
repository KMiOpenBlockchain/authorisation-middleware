//Router
var express = require('express');
var router = express.Router();
var authorisation = require('../libraries/authLibrary.js');

router.post('/isAuthorised',  (req, res, next) => {
  authorisation.checkAuthorisation(req, res, next, {
    roles : [ 'Professor']
  });
}, function(req, res, next) {
   res.status(200);
  });

module.exports = router;
