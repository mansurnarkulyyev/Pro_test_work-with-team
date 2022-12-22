const express = require("express");
const router = express.Router();
const { createTryCatchWrapper } = require("../../helpers");
const ctrl = require("../../controllers/questions");

router.get(
  "/",
  createTryCatchWrapper(ctrl.theoryQuestions.getAllTheoryQuestions)
);

router.get(
  "/random",
  createTryCatchWrapper(ctrl.theoryQuestions.get12TheoryQuestions)
);

router.get(
  "/:questionId",
  createTryCatchWrapper(ctrl.theoryQuestions.getTheoryQuestionById)
);

module.exports = router;
