const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const { createReqError } = require("../../helpers");

async function signin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw createReqError(401, "Email not found");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw createReqError(401, "Password is wrong");
  }
  const token = "fghsdhg";

  res.status(201).json({ email, token });
}

module.exports = signin;
