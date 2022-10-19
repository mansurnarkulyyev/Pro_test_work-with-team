const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { createReqError } = require("../../helpers");

const { SECRET_KEY } = process.env;

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
  const userPayload = {
    id: user._id,
  };
  const token = jwt.sign(userPayload, SECRET_KEY, { expiresIn: "6h" });

  res.status(201).json({ email, token });
}

module.exports = signin;
