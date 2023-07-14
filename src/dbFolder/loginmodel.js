const mongoose = require('mongoose')

let loginDetailsOfPerson = mongoose.Schema({
    username:{
        type:String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true
    }
})

const loginCollection = mongoose.model('loginCollections' , loginDetailsOfPerson)

module.exports = loginCollection