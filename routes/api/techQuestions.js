const express = require("express");
const router = express.Router();
const { createTryCatchWrapper } = require("../../helpers");
const ctrl = require("../../controllers/questions");

router.get("/", createTryCatchWrapper(ctrl.techQuestions.getAllTechQuestions));

router.get(
  "/:questionId",
  createTryCatchWrapper(ctrl.techQuestions.getTechQuestionById)
);

module.exports = router;
