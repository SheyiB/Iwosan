const {getPatientData} = require('../controllers/patient.controller')

const express = require('express')

const router = express.Router();

router.get("/:id", getPatientData);


module.exports = router;
