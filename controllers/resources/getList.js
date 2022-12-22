const { Resource } = require("../../models/resource");

async function getList(req, res) {
  const result = await Resource.find();
  res.status(200).json(result);
}
module.exports = getList;
