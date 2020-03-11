const employeeModel = require('../model/employeeModel')
const employeeValidator = require('../validator/employeeValidator')

const createEmployee= (req, res)=>{
    const verify =employeeValidator.employeeValidator(req.body)
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    new employeeModel(req.body).save()
    .then(newEmployee=>{
        res.status(200).json({massage:"Client created successfull ", employee:newEmployee})
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
    employeeModel.findByIdAndDelete(req.params.id)
    .then(deleted=>{
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