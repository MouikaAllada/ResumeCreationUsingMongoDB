const mongoose = require('mongoose')

const registrationSchema = mongoose.Schema({
    Username:{
        type : String,
        required : true
    },
    password:{
        type:String,
        required : true,
        unique: true
    },
    confirmpassword:{
        type:String,
        required : true,
        unique: true
    }
})

module.exports = mongoose.model('registrationCollection' , registrationSchema)