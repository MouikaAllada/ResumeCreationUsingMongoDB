const express = require('express')
const router = express.Router()
const User = require('../dbFolder/loginmodel')
const userregistration = require('../dbFolder/registrationmodel')
const postinglogindetails = require('../controllers/login.controllers')
const resume = require('./resumeCreation')


router.get('/postinglogindetails', postinglogindetails)



module.exports = router



