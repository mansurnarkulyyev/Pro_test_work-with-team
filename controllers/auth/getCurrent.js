async function getCurrent(req, res, next) {
  const { email } = req.user;
  res.json({
    email,
  });
  next();
}
module.exports = getCurrent;
