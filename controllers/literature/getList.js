const { Literature } = require("../../models/literature");

async function getList(req, res) {
  const result = await Literature.find();
  res.status(200).json(result);
}
module.exports = getList;
