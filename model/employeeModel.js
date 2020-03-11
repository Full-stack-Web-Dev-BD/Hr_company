const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  clientSchema = new Schema ({
    firstName:String,
    lastName:String,
    expertise:String,
    address:String,
    joinDate:String,
    phoneNumber:String,
    email:String,
    hourlyRate:String,
    profilePicture:String
})

const clientModel = mongoose.model('clientModel', (clientSchema))
module.exports = clientModel