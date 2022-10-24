const express = require("express");
const router = express.Router();
// const cors = require("cors");
const multer = require("multer");
const path = require("path");

// const { createTryCatchWrapper, createReqError } = require("../../helpers");
const { validateBody,upload } = require("../../middleware");
// const { Users } = require("../../models/avatarSchema");
const fs = require("fs/promises"); 
const gravatar = require("gravatar");
// var { nanoid } = require("nanoid");

// const app = express();

//img storage path

// const tempDir = path.join(__dirname, "public");
// const imgConfig = multer.diskStorage({
//     destination: tempDir,
//     filename: (req, file, callback) => {
//         callback(null, file.originalname)
//     },
// });

 

// //img filter
// // const isImage = (_, cover, callback) => {
// //     if (cover.mimetype.startsWith("image")) {
// //         callback(null, true)
// //     } else {
// //         callback(new Error("Only image is allowed! "))
// //     }
// // };

// const upload = multer({
//     storage: imgConfig,
//     // fileFilter: isImage,
// });

const avatars = [];

// app.get("/api/avatars", async(req, res) => {
//     res.json(avatars)
// })

const avatarDir = path.join(__dirname, "public", "avatars");
router.patch("/avatars", upload.single("avatar"), async (req, res) => {
    
try {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(avatarDir, originalname);
    await fs.rename(tempUpload, resultUpload);
    const cover = path.join("avatars", originalname);
    const { name,title,text } = req.body;
    const newAvatar = new Users({
            avatarURL,
            name: name,
            title: title,
            text: text,
            cover,
        })
    // const newAvatar = {
    //     id: nanoid,
    //     name: req.body.name,
    //     position: req.body.position,
    //     about: req.body.about,
    //     cover,
    // };
    avatars.push(newAvatar);
    res.status(201).json(newAvatar);
} catch (error) {
    await fs.unlink(req.file.path);
    };



    // const { filename } = req.cover;
    // const { name,title,text } = req.body;

    // if (!name || !filename || !title || !text) {
    //      throw createReqError(401, "Not authorized");
    // }

    // try {
    //     const userData = new Users({
    //         avatarURL,
    //         name: name,
    //         title: title,
    //         text: text,
            // cover,
    //     })

    //     const finalData = await userData.save();

    //     res.status(201).json({
    //         status: 201,
    //         finalData
    //     });
    // } catch (error) {
    //       throw createReqError(401, error);
    // }
});

// router.get("/getdata", async (req, res) => {
//     try {

//         const getUser = await Users.find()

//         res.status(201).json({
//             status: 201,
//             getUser
//         });
//     } catch (error) {
//          throw createReqError(401, error);
//     }
// });


// router.delete("/:id", async (req, res) => {
//     try {

//         const { id } = req.params;

//         const deleteUser = await Users.findByIdAndRemove({_id:id})

//         res.status(201).json({
//             status: 201,
//            deleteUser
//         });
//     } catch (error) {
//          throw createReqError(401, error);
//     }
// });


module.exports = router;
