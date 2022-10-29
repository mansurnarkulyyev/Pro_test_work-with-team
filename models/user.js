const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseSchemaError } = require("../helpers");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
// const passwordRegexp = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$/;

const testTypes = ["tech", "theory"];

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      // match: passwordRegexp,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: "",
    },
    testResults: {
      type: Object,
      default: {
        tech: [],
        theory: [],
      },
    },
    admin: {
      type: Boolean,
      default:false,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseSchemaError);

const signupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).min(5).required().messages({
    "string.base": `{{#label}}should be a type of 'text'`,
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.min": `{{#label}} min lenght 5`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: 'email@mail.com'`,
    "string.pattern.name": `{{#label}} with value {:[.]} fails to match the 'email@mail.com' pattern`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": `{{#label}} cannot be an empty field`,
    "string.min": `{{#label}} min lenght 6`,
    "string.pattern.base": `{{#label}} with value {:[.]} fails to match the required pattern: Minimum six characters, at least one letter, one number and one special character'`,
    "any.required": `{{#label}} is a required field`,
  }),
});

const signinSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const testResultsSchema = Joi.object({
  name: Joi.string().valueOf(testTypes),
  results: Joi.array().items(Joi.number()),
});

const schemas = {
  signupSchema,
  signinSchema,
  testResultsSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
