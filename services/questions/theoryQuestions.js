const { TheoryQuestion } = require("../../models/question");

const getAllTheory = async () => {
  return TheoryQuestion.find();
};

const getNRandomTheory = async (n) => {
  return TheoryQuestion.aggregate([{ $sample: { size: n } }]);
};

const getTheoryById = async (questionId) => {
  return TheoryQuestion.findOne({ questionId });
};

module.exports = { getAllTheory, getNRandomTheory, getTheoryById };
