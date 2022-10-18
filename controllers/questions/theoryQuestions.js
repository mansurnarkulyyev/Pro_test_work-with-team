const { createReqError } = require("../../helpers");
const services = require("../../services/questions/theoryQuestions");

const getAllTheoryQuestions = async (_, res) => {
  const questions = await services.getAllTheory();
  res.json({ questions });
};

const getTheoryQuestionById = async (req, res) => {
  const { questionId } = req.params;
  const question = await services.getTheoryById(questionId);
  if (!question) {
    createReqError(404, "No such question found");
  }
  res.json({ question });
};

module.exports = { getAllTheoryQuestions, getTheoryQuestionById };
