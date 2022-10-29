const { TechQuestion } = require("../../models/question");

const getAllTech = async () => {
  return TechQuestion.find();
};

const getNRandomTech = async (n) => {
  return TechQuestion.aggregate([{ $sample: { size: n } }]);
};

const getTechById = async (questionId) => {
  return TechQuestion.findOne({ questionId });
};

module.exports = { getAllTech, getNRandomTech, getTechById };
