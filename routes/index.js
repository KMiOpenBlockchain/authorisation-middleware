//Router
require('../config.js');
var passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = cfg.secret;
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    
    return done(null );
}));

var express = require('express');
var router = express.Router();


var authorisation = require('../libraries/authLibrary.js');

router.post('/isAuthorised',  [ passport.authenticate('jwt', {session: false}), (req, res, next) => {
    authorisation.checkAuthorisation(req, res, next, {
        roles : [ 'recruiter']})}], (req, res, next) => {
    res.send({});
}, function(req, res, next) {
   res.status(200);
  });

module.exports = router;
