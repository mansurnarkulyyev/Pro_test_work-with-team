const fs = require("fs/promises");
const path = require("path");

const { Contact } = require("../../models/contact");

const { createReqError } = require("../../helpers");

const avatarDir = path.join(__dirname, "../../", "public", "contacts");

async function addContactAvatar(req, res) {
  if (!req.user.admin) {
    throw createReqError(403, "Not admin");
  }
  const { path: tempUpload, originalname } = req.file;

  const result = path.join(avatarDir, originalname);
  const cover = path.join(`contacts`, originalname);

  await fs.rename(tempUpload, result);
  const response = await Contact.create({ ...req.body, cover });

  res.status(201).json(response);
}

module.exports = addContactAvatar;


/*
try{
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

*/
