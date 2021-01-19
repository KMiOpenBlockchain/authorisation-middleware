//Router
var express = require('express');
var router = express.Router();
var passport = require('passport');
var authorisation = require('../libraries/authLibrary.js');

router.post('/isAuthorised',  [ (req, res, next) => {
    authorisation.checkAuthorisation(req, res, next, {
        roles : [ 'recruiter']})}], (req, res, next) => {
    res.send({});
}, function(req, res, next) {
   res.status(200);
  });

module.exports = router;
