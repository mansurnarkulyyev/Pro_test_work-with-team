const {Team} = require("../../models/team")


const getAll=async(_,res) =>{
    const result = await Team.find();
    res.json(result);
}

module.exports = getAll;
