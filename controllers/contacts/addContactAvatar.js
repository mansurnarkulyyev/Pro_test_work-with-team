const path = require("path");

const { Contact } = require("../../models/contact");
const fs = require("fs/promises");
const { createReqError } = require("../../helpers");

const teams = [];

const avatarDir = path.join(__dirname, "../../", "public", "contacts");

const addContactAvatar = async (req, res) => {
  try {
    if (!req.user.admin) {
      throw createReqError(403, "Not admin");
    }

    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;
    const extension = originalname.split(".").pop();
    const filename = `${_id}.${extension}`;
    const resultUpload = path.join(avatarDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("contacts", filename);
    const newAvatar = {
      name: req.body.name,
      position: req.body.position,
      about: req.body.about,
      cover: avatarURL,
    };

    const finalData = await Contact.create(newAvatar);

    res.status(201).json(finalData);
  } catch (error) {
    await fs.unlink(req.file.path);
    res.status(401).json({ status: 401, error });
  }
};

module.exports = addContactAvatar;
