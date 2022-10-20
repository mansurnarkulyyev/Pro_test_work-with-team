const passport = require("passport");
const googleStrategy = require("./strategies/google");

passport.use("google", googleStrategy);

/* passport.use("google", () => {});  - передаем callback */

module.exports = passport;
