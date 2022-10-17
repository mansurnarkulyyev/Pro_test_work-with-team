const { createReqError } = require("../../helpers");
const services = require("../../services/questions/techQuestions");

const getAllTechQuestions = async (_, res) => {
  const questions = await services.getAllTech();
  res.json({ questions });
};

const getTechQuestionById = async (req, res) => {
  const { questionId } = req.params;
  const question = await services.getTechById(questionId);
  if (!question) {
    createReqError(404, "No such question found");
  }
  res.json({ question });
};

module.exports = { getAllTechQuestions, getTechQuestionById };
