const { createReqError } = require("../../helpers");
const { Team } = require("../../models/team");




const removeById = async (req,res) => {
    const { id } = req.params;
    const result = await Team.findByIdAndRemove(id);
    if (!result) {
        throw createReqError(404, "Not found");
    }

    res.json({
        message: "Delete success"
    }); 
};

module.exports = removeById;
