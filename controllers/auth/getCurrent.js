async function getCurrent(req, res, next) {
  const { email, token } = req.user;
  res.json({
    email,
    token,
  });
  next();
}
module.exports = getCurrent;
