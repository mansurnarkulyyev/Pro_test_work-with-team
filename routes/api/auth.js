const express = require("express");
const router = express.Router();

const passport = require("passport");

const { APP_URL } = process.env;

const {
  signup,
  signin,
  logout,
  getCurrent,
  postResults,
  getResults,
  googleAuth,
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


// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

router.get(
  "/google",
  authenticateSocial.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(201).json({
    success: true,
      message: "failure",
    user:req.user
  })
  }
})

router.get("/login/field", (req, res) => {
  res.status(401).json({
    success: false,
    message:"failure",
  })
})

router.get(
  "/google/callback",
  // passport.authenticate("google", {
  authenticateSocial.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
    successRedirect: APP_URL,
    failureRedirect:"/login/filed"
  }),
  createTryCatchWrapper(googleAuth)
);





module.exports = router;
