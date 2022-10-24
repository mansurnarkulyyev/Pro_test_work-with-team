const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const authenticateSocial = require("./authenticate-social");
const upload = require("./upload");

// const isValidId = require("./isValidId");

module.exports = {
  validateBody,
  authenticate,
  authenticateSocial,
  upload,
  // isValidId,
};
