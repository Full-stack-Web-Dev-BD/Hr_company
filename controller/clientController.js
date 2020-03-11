const clientModel = require('../model/clientModel')
const clientValidator = require('../validator/clientValidator')

const createClient= (req, res)=>{
    const verify =clientValidator.clientValidator(req.body)
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    new clientModel(req.body).save()
    .then(newClient=>{
        res.status(200).json({massage:"Client created successfull ", Client:newClient})
    })
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
    
}


const updateClient=(req,res)=>{
    clientModel.findByIdAndUpdate(req.params.id, req.body)
    .then(updated=>{
        res.status(200).json({massage:" Updated successfull ", updateClient:updated})
    })
    
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
}


const deleteClient = (req, res)=>{
    clientModel.findByIdAndDelete(req.params.id)
    .then(deleted=>{
        return res.status(200).json({massage:" Deleted successfull" , deleted:deleted})
    })
    
    .catch(err=>{
        return res.status(500).json({massage:" server error occured "})
    })
}
const allClient= (req, res)=>{
    clientModel.find()
    .then(clients=>{
        if(clients.length<1){
            return res.status(200).json({clients:false})
        }
        res.status(200).json(clients)
    })
    .catch(err=>{
        return res.status(500).json({massage:" Server error occurd"})
    })
}
const singleClient= (req, res)=>{
    clientModel.findById(req.params.id)
    .then(client=>{
        return res.status(200).json(client)
    })
    .catch(err=>{
        return res.status(500).json({massage:" Server error occurd"})
    })
    
}
module.exports = { 
    createClient,updateClient, deleteClient, allClient, singleClient
}