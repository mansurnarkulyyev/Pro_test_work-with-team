const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

async function googleAuth(req, res) {
  const { _id } = req.user;
  const payload = { id: _id };

  const token = jwt.sign(payload, `${process.env.SECRET_KEY}`, {
    expiresIn: "6h",
  });
  await User.findByIdAndUpdate(_id, { token });
  res.status(201).json({
    token,
    id,
  });
}
module.exports = googleAuth;
