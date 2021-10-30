const express = require('express');
const router = express.Router();
const troopController = require('../controllers/troopController')
const troopValidations = require('../validations/troopsValidation')

router.get('/amount/:amount', troopValidations.validationGetArmies ,troopController.getArmies);

module.exports = router