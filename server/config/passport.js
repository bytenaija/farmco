const passport = require('passport');
const User = require("../models/user");
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const JSWT = require("./jwt");
const ExtractJWT = passportJWT.ExtractJwt;
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    function (email, password, next) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return User.findOne({email})
           .then(user => {
               if (!user) {
                   return next(null, false, {message: 'Incorrect email or password.'});
               } 
               
               if(!user.password){
                return next(null, false, { message: 'Incorrect email or password.'});
               }
            
            
            
               return next(null, user, {message: 'Logged In Successfully'});
               
          })
          .catch(err => next(err));
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : JSWT.secret
},
function (jwtPayload, cb) {

    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return User.findOneById(jwtPayload.id)
        .then(user => {
            return cb(null, user);
        })
        .catch(err => {
            return cb(err);
        });
}
));