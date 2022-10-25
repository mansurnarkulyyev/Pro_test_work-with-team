const { Materials } = require("../../models/materials");

async function getList(req, res) {
  const result = await Materials.find();
  res.status(200).json(result);
}
module.exports = getList;
