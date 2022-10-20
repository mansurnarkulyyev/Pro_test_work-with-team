const { User } = require("../../models/user");

async function postResults(req, res) {
  const { body } = req;
  const { _id } = req.user;
  const { testResults } = await User.findById(_id);
  console.log(result);
  res.json({
    result,
  });
}
module.exports = postResults;
