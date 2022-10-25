const { Materials } = require("../../models/materials");

async function remove(req, res) {
  const { id } = req.params;
  await Materials.findOneAndDelete({ id });
  res.status(200).json({ message: "the article has been deleted" });
}
module.exports = remove;
