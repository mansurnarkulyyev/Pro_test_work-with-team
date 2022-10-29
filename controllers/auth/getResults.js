const { User } = require("../../models/user");

async function getResults(req, res) {
  const { kind } = req.params;
  const { _id } = req.user;
  const result = await User.findById(_id, "testResults");
  const { testResults } = result;
  res.json({
    kind,
    results: testResults[kind],
  });
}
module.exports = getResults;
