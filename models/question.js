const { Schema, model } = require("mongoose");
const Joi = require("joi");

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
  rightAnswer: {
    type: String,
    required: true,
  },
});

const addQuestionSchema = Joi.object({
  question: Joi.string().required(),
  questionId: Joi.string().required(),
  answers: Joi.array().required(),
  rightAnswer: Joi.string().required(),
});

const TechQuestion = model("techquestion", questionSchema);
const TheoryQuestion = model("theoryquestion", questionSchema);
const schemas = { addQuestionSchema };

module.exports = { TechQuestion, TheoryQuestion, schemas };
