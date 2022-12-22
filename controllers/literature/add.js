const { Literature } = require("../../models/literature");

async function add(req, res) {
  const result = await Literature.create({ ...req.body });
  res.status(201).json(result);
}
module.exports = add;
