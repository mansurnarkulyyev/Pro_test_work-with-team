const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  logout,
  getCurrent,
  postResults,
  getResults,
  googleAuth,
  gitHubAuth,
} = require("../../controllers/auth");
const { createTryCatchWrapper } = require("../../helpers");
const {
  validateBody,
  authenticate,
  authenticateSocial,
} = require("../../middleware");
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
router.get("/results/:kind", authenticate, createTryCatchWrapper(getResults));

//social link
//google

router.get(
  "/google",
  authenticateSocial.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  authenticateSocial.authenticate("google", {

    failureRedirect: "/login",
    successRedirect: "/home",

    scope: ["email", "profile"],
    failureRedirect: "/signup",
    successRedirect: "/",

    session: false,
  }),
  createTryCatchWrapper(googleAuth)
);

//github
/* router.get(
  "/github/callback",
  authenticateSocial.authenticate("github", {
    scope: ["email", "profile"],
    session: false,
  }),
  createTryCatchWrapper(gitHubAuth)
);
*/
module.exports = router;
