const shiftRouter= require('express').Router()
const shiftController = require('../controller/shiftController')

shiftRouter.post('/create-shift', shiftController.createShift)
shiftRouter.post('/update-shift/:id',  shiftController.updateShift)
shiftRouter.get('/delete-shift/:id', shiftController.deleteShift)
shiftRouter.get('/all-shift', shiftController.allShift)
shiftRouter.get('/single-shift/:id', shiftController.singleShift)
shiftRouter.get('/do-completed/:id', shiftController.doCompleted)
shiftRouter.post('/sort', shiftController.sortShift)



module.exports= shiftRouter