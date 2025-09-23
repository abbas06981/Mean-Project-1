
const express = require('express');
const router = express.Router();
const { registerUser } = require('../db/models/auth')


router.post('/register', registerUser)



module.exports = router




