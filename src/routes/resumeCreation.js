const express = require('express')
const router = express.Router()

const {createResume , getResumes}  = require('../controllers/resume.controllers')



router.post('/createResume/', createResume)


router.get('/getresumes/:user', getResumes)

module.exports = router