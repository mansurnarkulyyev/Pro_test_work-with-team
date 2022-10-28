const express = require("express");
const router = express.Router();

const { createTryCatchWrapper } = require("../../helpers");
const { resourceTemplate } = require("../../models/resource");
const { validateBody, isValidId } = require("../../middleware");

const { add, remove, getList } = require("../../controllers/resources");

router.post("/add", validateBody(resourceTemplate), createTryCatchWrapper(add));
router.delete("/:id", isValidId, createTryCatchWrapper(remove));
router.get("/", createTryCatchWrapper(getList));

module.exports = router;
