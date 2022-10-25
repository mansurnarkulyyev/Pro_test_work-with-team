const { Materials } = require("../../models/materials");

async function add(req, res) {
  const result = await Materials.create({ ...req.body }, "-v");
  res.status(201).json(result);
}
module.exports = add;
