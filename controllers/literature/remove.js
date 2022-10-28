const { Literature } = require("../../models/literature");

async function remove(req, res) {
  const { id } = req.params;
  await Literature.findOneAndDelete({ id });
  res.status(200).json({ message: "the article has been deleted" });
}
module.exports = remove;
