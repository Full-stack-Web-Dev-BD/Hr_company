// – ID, firstname, lastname, email, password 
// ID will generate automatic by mongoose !
const mongoose = require ('mongoose')
const Schema= mongoose.Schema


const registerSchema= new Schema ({
    firstName:String,
    lastName:String,
    email:String,
    password:String
    // no need to add ID here 
})



const registerModel = mongoose.model('registerModel', registerSchema)
module.exports = registerModel