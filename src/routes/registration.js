const express = require('express')
const { route } = require('./login')
const app = express()
const router = express.Router()
const regCollection = require('../dbFolder/registrationmodel')
const loginCollection = require('../dbFolder/loginmodel')
const newUserRegistration = require('../controllers/registration.controller')
router.get("/registration", (req, res) => {
    console.log("hello from reg pae")
    res.send("hi from reg page")
})



router.post('/userregistration' , newUserRegistration)


module.exports = router