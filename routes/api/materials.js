const express = require("express");
const router = express.Router();

const { createTryCatchWrapper } = require("../../helpers");
const { materialsTemplate } = require("../../models/materials");
const { validateBody, isValidId } = require("../../middleware");

const { add, remove, getList } = require("../../controllers/materials");

router.post(
  "/add",
  validateBody(materialsTemplate),
  createTryCatchWrapper(add)
);
router.delete("/:id", isValidId, createTryCatchWrapper(remove));
router.get("/", createTryCatchWrapper(getList));

module.exports = router;
