const { Resource } = require("../../models/resource");

async function add(req, res) {
  const result = await Resource.create({ ...req.body });
  res.status(201).json(result);
}
module.exports = add;
