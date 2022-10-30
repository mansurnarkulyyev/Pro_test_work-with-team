const { createReqError } = require("../../helpers");
const services = require("../../services/questions/techQuestions");

const getAllTechQuestions = async (_, res) => {
  const questions = await services.getAllTech();
  res.json({ questions });
};

const get12RandomTechQuestions = async (_, res) => {
  const questions = await services.getNRandomTech(12);
  for (let i = 1; i <= questions.length; i += 1) {
    questions[i - 1].questionId = `${i}`;
  }
  res.json({ questions });
};

const getTechQuestionById = async (req, res) => {
  const { questionId } = req.params;
  const question = await services.getTechById(questionId);
  if (!question) {
    throw createReqError(404, "No such question found");
  }
  res.json({ question });
};

module.exports = {
  getAllTechQuestions,
  get12RandomTechQuestions,
  getTechQuestionById,
};
