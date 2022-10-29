const { Resource } = require("../../models/resource");

async function remove(req, res) {
  const { id } = req.params;
  await Resource.findOneAndDelete({ id });
  res.status(200).json({ message: "the article has been deleted" });
}
module.exports = remove;
