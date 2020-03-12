//  employeeID, companyID, date, startTime, endTime, Completed (False by default)

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  shiftSchema = new Schema ({
    employeeID:String,
    companyID:String,
    date:String,
    startTime:String,
    endTime:String,
    completed:Boolean
})

const shiftModel = mongoose.model('shiftModel', (shiftSchema))
module.exports = shiftModel