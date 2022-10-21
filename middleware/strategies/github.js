const passport = require("passport");
const { Strategy } = require("passport-github2");

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

const githubParams = {
  clientID: `${process.env.GITHUB_CLIEND_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: `${process.env.APP_URL}${process.env.GITHUB_CALLBACK_URL}`,
};

const githubStrategy = new Strategy(githubParams, function (
  accessToken,
  refreshToken,
  profile,
  done
) {
  return done(null, profile);
});

module.exports = githubStrategy;
