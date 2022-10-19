const express = require("express");
const router = express.Router();

const { signup, signin } = require("../../controllers/auth");
const { createTryCatchWrapper } = require("../../helpers");
const { validateBody } = require("../../middleware");
const { schemas } = require("../../models/user");

//signup
router.post(
  "/signup",
  validateBody(schemas.signupSchema),
  createTryCatchWrapper(signup)
);

//signin
router.post(
  "/signin",
  validateBody(schemas.signinSchema),
  createTryCatchWrapper(signin)
);

module.exports = router;
