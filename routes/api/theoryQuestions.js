const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/questions");

router.get("/", ctrl.theoryQuestions.getAllTheoryQuestions);

router.get("/:questionId", ctrl.theoryQuestions.getTheoryQuestionById);

module.exports = router;
