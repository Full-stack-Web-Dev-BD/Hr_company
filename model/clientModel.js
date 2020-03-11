// ID, 
// Type of company  (On of the 3), 
// Entreprise name, 
// Entreprise owner (Firstname, Lastname), 
// Expertise (Short Text), 
// Company address, 
// phone number, 
// color (See below)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  clientSchema = new Schema ({
    typeOfCompany:String,
    entrepriseName:String,
    ownerFirstName:String,
    ownerlastName:String,
    expertise:String,
    companyAddress:String,
    phoneNumber:String,
    color:String
})

const clientModel = mongoose.model('clientModel', (clientSchema))
module.exports = clientModel