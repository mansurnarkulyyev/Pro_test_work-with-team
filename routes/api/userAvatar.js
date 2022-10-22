const express = require("express");
const router = express.Router();

const multer = require("multer");
const { signup } = require("../../controllers/auth");
const { createTryCatchWrapper, createReqError } = require("../../helpers");
const { validateBody } = require("../../middleware");
const { Users } = require("../../models/avatar");
const { schemas } = require("../../models/question");

//img storage path
const imgConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./public/avatars")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}. ${file.originalname}`)
    },
});



//img filter
const isImage = (_, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("Only image is allowed! "))
    }
};

const upload = multer({
    storage: imgConfig,
    fileFilter: isImage,
});

// router.post("/signup", upload.single("photo"), validateBody(schemas.signupSchema),createTryCatchWrapper(signup));
router.post("/signup", upload.single("photo"), async(req, res) => {
    const { filename } = req.file;
    const { name,title,text } = req.body;

    if (!name || !filename) {
         throw createReqError(401, "Not authorized");
    }

    try {
        const userData = new Users({
            avatarURL: filename,
            name: name,
            title: title,
            text: text,
            
        })

        const finalData = await userData.save();

        res.status(201).json({
            status: 201,
            finalData
        });
    } catch (error) {
          throw createReqError(401, error);
    }
});

// router.post("/", (req, res) => res.send({ message: "ITS NEW API in userAvatarJs" }));

module.exports = router;
