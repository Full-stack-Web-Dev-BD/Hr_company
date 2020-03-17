const employeeModel = require('../model/employeeModel')
const employeeValidator = require('../validator/employeeValidator')
const fs = require('fs')

const createEmployee= (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    // const verify =employeeValidator.employeeValidator(req.body)
    // if(!verify.isValid){
    //     return res.status(400).json(verify.err)
    // }
    new employeeModel({
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        expertise:req.body.expertise,
        address:req.body.address,
        joinDate:req.body.joinDate,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
        hourlyRate:req.body.hourlyRate,
        profilePicture:req.file.filename,
        picturePath:req.file.path
    }).save()
    .then(newEmployee=>{
        console.log(newEmployee)
        res.status(200).json({massage:"Employee created successfull ", employee:newEmployee})
    })
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
    
}


const updateEmployee=(req,res)=>{
    employeeModel.findByIdAndUpdate(req.params.id, req.body)
    .then(updated=>{
        res.status(200).json({massage:" Updated successfull ", updatedEmployee:updated})
    })
    
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
}


const deleteEmployee = (req, res)=>{
    
// const path = './file.txt'

    employeeModel.findByIdAndDelete(req.params.id)
    .then(deleted=>{
        
        // try {
        //   fs.unlinkSync(`../client/uploads/${deleted.profilePicture}`)
        //   console.log('image deleted success also ')
        // } catch(err) {
        //     res.status(500).json({massage:"srever error occurd"})
        //   console.error(err)
        // }
        return res.status(200).json({massage:" Deleted successfull" , deleted:deleted})
    })
    
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
}
const allEmployee= (req, res)=>{
    employeeModel.find()
    .then(employee=>{
        if(employee.length<1){
            return res.status(200).json({employee:false})
        }
        res.status(200).json(employee)
    })
    .catch(err=>{
        return res.status(500).json({massage:" Server error occurd"})
    })
}
const singleEmployee= (req, res)=>{
    employeeModel.findById(req.params.id)
    .then(client=>{
        return res.status(200).json(client)
    })
    .catch(err=>{
        return res.status(500).json({massage:" Server error occurd"})
    })
    
}
module.exports = { 
    createEmployee,updateEmployee, deleteEmployee, allEmployee, singleEmployee
}