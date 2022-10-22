const { isValidObjectId } = require("mongoose");

import { createReqError } from "../helpers";

const isValidId = (req, _, next) => {

    if (!isValidObjectId(req.params.id)) {
        next(createReqError(404, "Not found"))
    }
    next();
};

module.exports = isValidId;