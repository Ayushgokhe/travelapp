const express = require('express')
const {register, login, forgetPassword, resetPassword} = require('../controller/user')

const router = express.Router();

// register new user
router.post('/register', register)

// login route
router.post('/login', login)

// forget password
router.post('/forgetPassword', forgetPassword)

// rest password 
router.post('/resetPassword/:id/:token', resetPassword)

module.exports = router