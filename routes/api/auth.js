const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  logout,
  getCurrent,
  postResults,
  getResults,
} = require("../../controllers/auth");
const { createTryCatchWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middleware");
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

//logout
router.get("/logout", authenticate, createTryCatchWrapper(logout));

//getCurrent
router.get("/current", authenticate, createTryCatchWrapper(getCurrent));

//postResults
router.post(
  "/results",
  authenticate,
  validateBody(schemas.testResultsSchema),
  createTryCatchWrapper(postResults)
);

//getResults
router.get("/results", authenticate, createTryCatchWrapper(getResults));

module.exports = router;
