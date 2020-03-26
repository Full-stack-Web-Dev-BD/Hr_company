const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  employeeSchema = new Schema ({
    firstName:String,
    lastName:String,
    expertise:String,
    address:String,
    joinDate:String,
    phoneNumber:String,
    email:String,
    hourlyRate:String,
    profilePicture:String,
    picturePath:String,
    shiftHistory:[],
    totalShift:Number
})
const employeeModel = mongoose.model('employeeModel', (employeeSchema))
module.exports = employeeModel