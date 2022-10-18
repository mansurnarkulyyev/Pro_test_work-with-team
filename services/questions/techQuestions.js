const { TechQuestion } = require("../../models/question");

const getAllTech = async () => {
  return TechQuestion.find();
};

const getTechById = async (questionId) => {
  return TechQuestion.findOne({ questionId });
};

module.exports = { getAllTech, getTechById };
