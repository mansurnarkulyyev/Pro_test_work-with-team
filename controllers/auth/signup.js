const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const { createReqError } = require("../../helpers");

async function signup(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw createReqError(409, "Email has already used");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({ email, password: hashPassword });

  res.status(201).json({ email: result.email });
}

module.exports = signup;
