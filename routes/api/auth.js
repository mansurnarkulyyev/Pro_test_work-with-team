const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  logout,
  getCurrent,
} = require("../../controllers/auth");
const { createTryCatchWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middleware");
const { schemas } = require("../../models/user");

//signup
router.post(
  "/signup",
  validateBody(schemas.signupSchema, "Mistake in validation schemas"),
  createTryCatchWrapper(signup)
);

//signin
router.post(
  "/signin",
  validateBody(schemas.signinSchema, "Mistake in validation schemas"),
  createTryCatchWrapper(signin)
);

//logout
router.get("/logout", authenticate, createTryCatchWrapper(logout));

//getCurrent
router.get("/current", authenticate, createTryCatchWrapper(getCurrent));

module.exports = router;
