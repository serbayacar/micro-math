const express = require('express');
const multiplicationRouter = express.Router();
const { multiplication } = require('../services/MultiplicationService');

multiplicationRouter.get('/', multiplication);

module.exports = multiplicationRouter
