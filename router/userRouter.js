const userRouter = require('express').Router()
const userController = require('../controller/userController')



userRouter.post('/register',userController.register )
userRouter.post('/login',userController.login )
userRouter.get('/', (req, res)=>{return res.json({massage:"welcome to our application"})})





module.exports =userRouter