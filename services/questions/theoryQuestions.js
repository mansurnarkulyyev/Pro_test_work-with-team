const { TheoryQuestion } = require("../../models/question");

const getAllTheory = async () => {
  return TheoryQuestion.find();
};

const getTheoryById = async (questionId) => {
  return TheoryQuestion.findOne({ questionId });
};

module.exports = { getAllTheory, getTheoryById };
