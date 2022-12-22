const express = require("express");
const router = express.Router();

const { createTryCatchWrapper } = require("../../helpers");
const { literatureTemplate } = require("../../models/literature");
const { validateBody, isValidId, authenticate } = require("../../middleware");

const { add, remove, getList } = require("../../controllers/literature");

router.post(
  "/add",
  authenticate,
  validateBody(literatureTemplate),
  createTryCatchWrapper(add)
);
router.delete("/:id", authenticate, isValidId, createTryCatchWrapper(remove));
router.get("/", authenticate, createTryCatchWrapper(getList));

module.exports = router;
