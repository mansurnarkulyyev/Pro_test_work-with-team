const express = require('express');

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId, authenticate} = require("../../middlewares");

const {schemas } = require("../../models/contact");

const router = express.Router();

router.get('/'); 




module.exports = router;
