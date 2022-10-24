const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseSchemaError } = require("../helpers");


const avatarSchema = new Schema({
    avatarURL: {
        type: String,
        require:true,
    },
    name: {
        type: String,
        required:[true, "Set name for user"],
    },
     title: {
        type: String,
        default:"",
    },
      text: {
        type: String,
        default:"",
    },
});

avatarSchema.post("save", handleMongooseSchemaError);

const addAvatarSchema = Joi.object({
  avatarURL: Joi.string().required(),
  name: Joi.string().required(),
  title: Joi.string().required(),
  text: Joi.string().required(),
});

const Users = model("users", avatarSchema);

const schemas = { addAvatarSchema };

module.exports = {
    Users,
    schemas,
};

