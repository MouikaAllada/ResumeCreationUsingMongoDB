const express = require('express');
const app = express();
// const port = process.env.PORT || 8080;
app.use(express.json())


const dbConn = require('./dbFolder/conn.js')
dbConn ? console.log("connected") : console.log("not connected")


const postinglogindetails = require('./routes/login.js')
const registration = require('./routes/registration.js')
const resumecreation = require('./routes/resumeCreation.js')
const errorHandler = require('../errorHandlers/errorHandlerFile.js')
const dotenv = require('dotenv').config()

app.get('/', (req, res) => {
    console.log("working")
    return "Working"
})



app.use('/register', registration)
app.use('/login', postinglogindetails)
app.use('/resume', resumecreation)

app.use(errorHandler)


app.listen(process.env.PORT , console.log(`server running on port ${process.env.PORT}`));


module.exports = app