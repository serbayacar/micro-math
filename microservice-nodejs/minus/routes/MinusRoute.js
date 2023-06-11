const express = require('express');
const minusRouter = express.Router();
const { minus } = require('../services/MinusService');

minusRouter.get('/', minus);


module.exports = minusRouter;