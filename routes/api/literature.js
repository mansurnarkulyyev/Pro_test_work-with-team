const express = require("express");
const router = express.Router();

const { createTryCatchWrapper } = require("../../helpers");
const { literatureTemplate } = require("../../models/literature");
const { validateBody, isValidId } = require("../../middleware");

const { add, remove, getList } = require("../../controllers/literature");

router.post(
  "/add",
  validateBody(literatureTemplate),
  createTryCatchWrapper(add)
);
router.delete("/:id", isValidId, createTryCatchWrapper(remove));
router.get("/", createTryCatchWrapper(getList));

module.exports = router;
