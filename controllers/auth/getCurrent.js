async function getCurrent(req, res, next) {
  const { email, token, admin } = req.user;
  res.json({
    email,
    token,
    admin,
  });
  next();
}
module.exports = getCurrent;
