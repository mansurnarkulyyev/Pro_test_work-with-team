const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseSchemaError } = require("../helpers");


const avatarSchema = new Schema({
    // image: {
    //     type: String,
    //     require:true,
    // },
    name: {
        type: String,
        required:[true, "Set name for user"],
    },
     position: {
         type: String,
         require:true,
        // default:"",
    },
      about: {
          type: String,
          require:true,
        // default:"",
    },
});

avatarSchema.post("save", handleMongooseSchemaError);

const addAvatarSchema = Joi.object({
//   image: Joi.string().required(),
  name: Joi.string().required(),
  position: Joi.string().required(),
  about: Joi.string().required(),
});

const Team = model("team", avatarSchema);//team название коллекции и должно совпадать с названием файла в моделе 

const schemas = { addAvatarSchema };

module.exports = {
    Team,
    schemas,
};
