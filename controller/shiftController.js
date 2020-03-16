const shiftModel = require('../model/shiftModel')
const shiftValidator = require('../validator/shiftValidator')

const createShift= (req, res)=>{
    const verify =shiftValidator.shiftValidator(req.body)
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    new shiftModel(req.body).save()
    .then(shift=>{
        res.status(200).json({massage:"Shift created successfull ", Shift:shift})
    })
    .catch(err=>{
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
module.exports = { 
    createShift,updateShift, deleteShift, allShift, singleShift, doCompleted
}