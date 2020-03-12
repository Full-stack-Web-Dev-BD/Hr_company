const employeeRouter= require('express').Router()
const employeeController = require('../controller/employeeController')


employeeRouter.post('/create-employee', employeeController.createEmployee)
employeeRouter.post('/update-employee/:id',  employeeController.updateEmployee)
employeeRouter.get('/delete-employee/:id', employeeController.deleteEmployee)
employeeRouter.get('/all-employee', employeeController.allEmployee)
employeeRouter.get('/single-employee/:id', employeeController.singleEmployee)




module.exports= employeeRouter