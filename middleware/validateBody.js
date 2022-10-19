const { createReqError } = require("../helpers");

function validateBody(template) {
  function func(req, _, next) {
    const { error } = template.validate(req.body);
    if (error) {
      next(createReqError(400, error.message));
    }
    next();
  }
  return func;
}

module.exports = validateBody;
