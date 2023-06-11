const express = require('express');
const plusRouter = express.Router();
const { plus } = require('../services/PlusService');

plusRouter.get('/', plus);

module.exports = plusRouter;