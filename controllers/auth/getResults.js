const { User } = require("../../models/user");

async function getResults(req, res) {
  const { _id } = req.user;
  const { testResults } = await User.findById(_id);
  res.json({
    testResults,
  });
}
module.exports = getResults;
