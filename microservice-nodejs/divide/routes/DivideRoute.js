const express = require('express');
const divideRouter = express.Router(); 
const { divide } = require('../services/DivideService');

divideRouter.get('/', divide);

module.exports = divideRouter;