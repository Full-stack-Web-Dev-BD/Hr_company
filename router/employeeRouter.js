const employeeRouter= require('express').Router()
const employeeController = require('../controller/employeeController')


employeeRouter.post('/create-employee', employeeController.createemployee)
employeeRouter.post('/update-employee/:id',  employeeController.updateemployee)
employeeRouter.get('/delete-employee/:id', employeeController.deleteemployee)
employeeRouter.get('/all-employee', employeeController.allemployee)
employeeRouter.get('/single-employee/:id', employeeController.singleemployee)




module.exports= employeeRouter