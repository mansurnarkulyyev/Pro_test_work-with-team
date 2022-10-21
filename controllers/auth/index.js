const signup = require("./signup");
const signin = require("./signin");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const postResults = require("./postResults");
const getResults = require("./getResults");

const googleAuth = require("./googleAuth");
const gitHubAuth = require("./gitHubAuth");

module.exports = {
  signup,
  signin,
  logout,
  getCurrent,
  googleAuth,
  postResults,
  getResults,
  googleAuth,
  gitHubAuth,
};
