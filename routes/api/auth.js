const express = require("express");
const router = express.Router();

// const passport = require("passport");


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


router.get(
  "/google/callback",
  authenticateSocial.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
  }),
  createTryCatchWrapper(googleAuth)
);

// 
authenticateSocial.serializeUser((user) => {
  return done(null, user._id);
});

authenticateSocial.deserializeUser((id) => {

  User.findById(id, (err) => {
    // Whatever we return goes to the client and binds to the req.user property
    return done(null, doc);
  })
})



module.exports = router;
