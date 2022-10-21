const passport = require("passport");
const googleStrategy = require("./strategies/google");
const githubStrategy = require("./strategies/github");

passport.use("google", googleStrategy);
passport.use("github", githubStrategy);

module.exports = passport;
