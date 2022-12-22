const express = require("express");
const router = express.Router();

const { createTryCatchWrapper } = require("../../helpers");
const { resourceTemplate } = require("../../models/resource");
const { validateBody, isValidId, authenticate } = require("../../middleware");

const { add, remove, getList } = require("../../controllers/resources");

router.post(
  "/add",
  authenticate,
  validateBody(resourceTemplate),
  createTryCatchWrapper(add)
);
router.delete("/:id", authenticate, isValidId, createTryCatchWrapper(remove));
router.get("/", authenticate, createTryCatchWrapper(getList));

module.exports = router;
