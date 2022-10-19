const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const { User } = require("../models/user");
const { createReqError } = require("../helpers");

async function authenticate(req, res, next) {
  try {
    const { authorization = "" } = req.headers;

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw createReqError(401, "Not authorized");
    }

    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user) {
        throw createReqError(401, "Not authorized");
      }
      req.user = user;
      next();
    } catch (err) {
      throw createReqError(401, "Not authorized");
    }
  } catch (err) {
    next(err);
  }
}

module.exports = authenticate;
