
const path = require("path");

// const { createTryCatchWrapper, createReqError } = require("../../helpers");
const { validateBody,upload } = require("../../middleware");
const { Users } = require("../../models/avatarSchema");
const fs = require("fs/promises"); 

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    
try {
    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.users;
    const extension = originalname.split(".").pop();
    const filename = `${_id}.${extension}`;
    const resultUpload = path.join(avatarDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);
    await Users.findByIdAndUpdate(_id,{avatarURL})
    // const { name,title,text } = req.body;
    // const newAvatar = new Users({
    //         avatarURL,
    //         name: name,
    //         title: title,
    //         text: text,
    //         cover,
    //     })
    // const newAvatar = {
    //     id: nanoid,
    //     name: req.body.name,
    //     position: req.body.position,
    //     about: req.body.about,
    //     cover,
    // };
    // avatars.push(newAvatar);
    res.status(201).json(avatarURL);
} catch (error) {
    await fs.unlink(req.file.path);
    };

};