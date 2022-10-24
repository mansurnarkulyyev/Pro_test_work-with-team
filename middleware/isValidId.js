const { isValidObjectId } = require("mongoose");
const { createReqError } = require("../helpers");


const isValidId = (req, _, next) => {
    if (!isValidObjectId(req.params.id)) {
        next(createReqError(404, "Not found"))
    }
    next();
};

module.exports = isValidId;