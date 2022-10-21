const { User } = require("../../models/user");

async function postResults(req, res) {
  const { kind, results } = req.body;
  const { _id } = req.user;
  const key = `testResults.${kind}`;
  const testResults = await User.findByIdAndUpdate(
    _id,
    { [key]: results },
    { new: true }
  );

  res.json({
    testResults,
  });
}
module.exports = postResults;
