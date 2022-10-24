const multer = require("multer");
const path = require("path");


const tempDir = path.join(__dirname,"../", "temp");
const imgConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
});

 
const upload = multer({
    storage: imgConfig,
});

module.exports = upload;