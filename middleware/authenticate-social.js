const passport = require("passport");
const googleStrategy = require("./strategies/google");

passport.use("google", googleStrategy);

module.exports = passport;
