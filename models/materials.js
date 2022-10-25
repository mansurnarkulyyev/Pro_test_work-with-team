const { Schema, model } = require("mongoose");
const Joi = require("joi");

const linkRexep =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const materialsSchema = new Schema({
  name: {
    type: String,
    default: "NoName",
    required: [true, "Name of source is required"],
  },
  link: {
    type: String,
    match: linkRexep,
  },
});

const Materials = model("materials", materialsSchema);

const materialsTemplate = Joi.object({
  name: Joi.string().required(),
  link: Joi.string().pattern(linkRexep),
});

module.exports = {
  Materials,
  materialsTemplate,
};
