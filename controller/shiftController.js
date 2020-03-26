const shiftModel = require('../model/shiftModel')
const shiftValidator = require('../validator/shiftValidator')
const employeeModel = require('../model/employeeModel')
const createShift= (req, res)=>{
    const verify =shiftValidator.shiftValidator(req.body)
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    employeeModel.findById(req.body.employeeID)
    .then(employee=>{
        console.log(employee)
        if(!employee){
           return res.status(400).json({massage:"Employee not exist , pls give currect ID of employee"})
        }
        employee.shiftHistory.push({...req.body})
        employee.save()
        .then(updated=>{
            new shiftModel(req.body).save()
            .then(shift=>{
                res.status(200).json({massage:"Shift created successfull ", Shift:shift})
            })
            .catch(err=>{
                console.log(err)
                return res.status(500).json({massage:" server error occured "})
            })
        })
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({massage:" server error occured "})
    })
}




const updateShift=(req,res)=>{
    console.log(req.body)
    shiftModel.findByIdAndUpdate(req.params.id, req.body)
    
    .then(updated=>{
        console.log('updated', updated)
        res.status(200).json({massage:" Updated successfull ", updatedShift:updated})
    })
    
    .catch(err=>{
        console.log(err)
        return res.status(500).json({massage:" server error occured "})
    })
}


const deleteShift = (req, res)=>{
    shiftModel.findByIdAndDelete(req.params.id)
    .then(deleted=>{
        return res.status(200).json({massage:" Deleted successfull" , deleted:deleted})
    })
    
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
}
const allShift= (req, res)=>{
    shiftModel.find()
    .then(shift=>{
        if(shiftModel.length<1){
            return res.status(200).json({shift:false})
        }
        res.status(200).json(shift)
    })
    .catch(err=>{
        return res.status(500).json({massage:" Server error occurd"})
    })
}
const singleShift= (req, res)=>{
    shiftModel.findById(req.params.id)
    .then(shift=>{
        return res.status(200).json(shift)
    })
    .catch(err=>{
        return res.status(500).json({massage:" Server error occurd"})
    })
    
}

const doCompleted=(req, res)=>{
    shiftModel.findById(req.params.id)
    .then(shift=>{
        shift.completed=!shift.completed
        shift.save()
        .then(updated=>{
            res.status(200).json({massage:"Updated success", updated})
        })
    })
    .catch(err=>{
        res.status(500).json({massage:"server error occurd"})
    })
}
const sortShift=(req, res)=>{
    shiftModel.find()
    .then(shifts=>{
        let sorted=[]
        if(req.body.text.toLowerCase()==='no sort'){
            return res.status(200).json(shifts)
    
        }
        shifts.forEach(single=>{
            if(req.body.text.toLowerCase()==='completed' && single.completed){
                sorted.push(single)
            }
            if(req.body.text.toLowerCase()==='uncompleted' && !single.completed){
                sorted.push(single)
            }
        })
        res.status(200).json(sorted)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"Server error occurd "})
    })
}
module.exports = { 
    createShift,updateShift, deleteShift, allShift, singleShift, doCompleted,sortShift
}