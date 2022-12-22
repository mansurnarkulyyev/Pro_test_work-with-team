const { createReqError } = require("../../helpers");
const services = require("../../services/questions/theoryQuestions");

const getAllTheoryQuestions = async (_, res) => {
  const questions = await services.getAllTheory();
  res.json({ questions });
};

const get12TheoryQuestions = async (_, res) => {
  const questions = await services.getNRandomTheory(12);
  for (let i = 1; i <= questions.length; i += 1) {
    questions[i - 1].questionId = `${i}`;
  }
  res.json({ questions });
};

const getTheoryQuestionById = async (req, res) => {
  const { questionId } = req.params;
  const question = await services.getTheoryById(questionId);
  if (!question) {
    throw createReqError(404, "No such question found");
  }
  res.json({ question });
};

module.exports = {
  getAllTheoryQuestions,
  get12TheoryQuestions,
  getTheoryQuestionById,
};
