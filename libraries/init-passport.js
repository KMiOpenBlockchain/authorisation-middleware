const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// This is a configuration file.

module.exports = exports = function passportUser (passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = cfg.secret;
    passport.use(new JwtStrategy(opts), (jwt_payload, done) => {
        DBAccess.users.getUserById(jwt_payload._id, (err, user) => {
            return done();
        });
    });
};