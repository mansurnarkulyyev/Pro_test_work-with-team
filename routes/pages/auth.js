const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    `<a href="${process.env.APP_URL}/api/users/google">Google Sign In</a>`
  );
});

module.exports = router;
