const {login, signup} = require('../controllers/auth.controller')

const express = require('express')

const router = express.Router();

router.post("/signUp", signup);
router.post('/login', login);

module.exports = router;
