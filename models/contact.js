const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseSchemaError } = require("../helpers");


const avatarSchema = new Schema({
    name: {
        type: String,
        required:true,
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
       cover: {
        type: String,
        require:true,
    },
   
}, { versionKey: false, timestamps: true });

avatarSchema.post("save", handleMongooseSchemaError);

const addAvatarSchema = Joi.object({
  name: Joi.string().required(),
  position: Joi.string().required(),
  about: Joi.string().required(),
});

const Contact = model("contact", avatarSchema);//contact название коллекции и должно совпадать с названием файла в моделе 

const schemas = { addAvatarSchema };

module.exports = {
    Contact,
    schemas,
};

