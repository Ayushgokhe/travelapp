const express = require('express')
const {register, login} = require('../controller/user')

const router = express.Router();

// register new user
router.post('/register', register)

// login route
router.post('/login', login)

module.exports = router