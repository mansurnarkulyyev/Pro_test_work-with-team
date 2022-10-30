const express = require("express");

const router = express.Router();
const { createTryCatchWrapper } = require("../../helpers");
const {
  validateBody,
  isValidId,
  upload,
  authenticate,
} = require("../../middleware");
const { schemas } = require("../../models/contact");
const {
  addContactAvatar,
  getAll,
  removeById,
} = require("../../controllers/contacts");

router.get("/", createTryCatchWrapper(getAll));

router.post(
  "/add",
  authenticate,
  upload.single("cover"),
  validateBody(schemas.addContactSchema),
  createTryCatchWrapper(addContactAvatar)
);

router.delete("/:id", isValidId, createTryCatchWrapper(removeById));

module.exports = router;
