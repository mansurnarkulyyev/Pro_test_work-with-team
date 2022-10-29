const { createReqError } = require("../../helpers");
const { Contact } = require("../../models/contact");




const removeById = async (req,res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
        throw createReqError(404, "Not found");
    }

    res.json({
        message: "Delete success"
    }); 
};

module.exports = removeById;
