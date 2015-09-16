var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysqlController = require('../controllers/mysql');
var bcrypt = require('bcryptjs');

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  mysql.findUser(username, function(user) {
    done(null, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    mysql.findUser(username, function(user) {
      if (!user.username) {
        return done(null, false);
      }
      if (bcrypt.compareSync(password, user.password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));
