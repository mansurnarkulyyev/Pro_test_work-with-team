
const path = require("path");

const { Team } = require("../../models/team");
const fs = require("fs/promises"); 

const teams = [];

const avatarDir = path.join(__dirname, "../../", "public", "teams");

const addUserAvatar = async (req, res) => {
    try {
        const { path: tempUpload, originalname } = req.file;
        const { _id } = req.user;
        const extension = originalname.split(".").pop();
        const filename = `${_id}.${extension}`;
        const resultUpload = path.join(avatarDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("teams", filename);
    const newAvatar = {
        name: req.body.name,
        position: req.body.position,
        about: req.body.about,
        cover:avatarURL,
    };
    const finalData = await Team.create(newAvatar);

    res.status(201).json(finalData);
    } catch (error) {
        await fs.unlink(req.file.path);
        res.status(401).json({status:401, error})
    };

 };

module.exports = addUserAvatar;











