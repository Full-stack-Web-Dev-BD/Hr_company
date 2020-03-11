const clientRouter= require('express').Router()
const clientController = require('../controller/clientController')


clientRouter.post('/create-client', clientController.createClient)
clientRouter.post('/update-client/:id',  clientController.updateClient)
clientRouter.get('/delete-client/:id', clientController.deleteClient)
clientRouter.get('/all-client', clientController.allClient)
clientRouter.get('/single-client/:id', clientController.singleClient)




module.exports= clientRouter