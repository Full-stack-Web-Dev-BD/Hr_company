const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('../validator/registerValidator')

const register = (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body
    const validate = validator.register({ firstName: firstName , lastName:lastName, email: email, password: password, confirmPassword: confirmPassword})
    if (!validate.isValid) {
        return res.status(400).json(validate.err)
    }
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
           return res.status(400).json({massage:"user allready exist"})
        }
        else {
            bcrypt.hash(password, 13, (err, hash) => {
                if (err) {
                    return res.status(500).json({ error: err })
                } else {
                    let user = {
                        firstName: firstName,
                        lastName:lastName,
                        email: req.body.email,
                        password: hash,
                    }
                    new userModel(user)
                        .save()
                        .then(user => {
                           return res.status(201).json({
                                message: 'User Created Successfully',
                                user
                            })
                        })
                        .catch(error => {
                           return res.status(500).json({ err: err })
                        })
    
                }
    
            })
        }
    })
    .catch(err=>{
        if(err){
            return res.status(500).json({massage:"server error occurd"})
        }
    })
}




const login = (req, res) => {
    const loginValidate = validator.login(req.body)
    if (!loginValidate.isValid) {
       return res.status(400).json({err:loginValidate.err})
        
    } else {
        userModel.findOne({ email: req.body.email })
            .then(data => {
                if (!data) {
                   return res.status(400).json({ massage: "User Not Found " })
                    
                }
                bcrypt.compare(req.body.password, data.password)
                    .then(reesult => {
                        if (!reesult) {
                           return res.status(404).json({ massage: "Wrong password" })
                        }
                        if (reesult) {
                            const token = jwt.sign({ name: data.name, email: data.email, _id: data._id, type: data.type }, 'secret', { expiresIn: '4h' })
                           return res.status(200).json({ massage: "Loin successfull", token: token })
                        }
                    })
            })
            .catch(err => {
                console.log(err)
               return res.status(500).json(err)
            })
    }
}

module.exports ={
    register, login
}