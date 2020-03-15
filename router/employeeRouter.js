const employeeRouter= require('express').Router()
const employeeController = require('../controller/employeeController')
const upload = require('../controller/ImageUploader')

employeeRouter.post('/create-employee',upload.single('file'), employeeController.createEmployee)
employeeRouter.post('/update-employee/:id',  employeeController.updateEmployee)
employeeRouter.get('/delete-employee/:id', employeeController.deleteEmployee)
employeeRouter.get('/all-employee', employeeController.allEmployee)
employeeRouter.get('/single-employee/:id', employeeController.singleEmployee)




module.exports= employeeRouter