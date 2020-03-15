const employeeModel = require('../model/employeeModel')
const employeeValidator = require('../validator/employeeValidator')
// upload image

// router.post('/register',upload.single('file'), (req, res)=>{
// 	console.log(req.body)
// 	const {errors, isValid}=validateRegisterInput(req.body)
// 	if(!isValid ){
// 		return res.status(400).json(errors)
// 	}
// 	User.findOne({email:req.body.email})
// 	.then(user=>{
// 		if(user){
// 			return res.status(400).json({email:"user  exist"})
// 		}else{
// 			bcrypt.hash(req.body.password, 12,((err, hash)=>{
// 				if(err){
// 					console.log(err)
// 					res.status(500).json({massage:"Server error occurd "})
// 				}else{
// 					const day= new Date()
// 					const dd= day.getDate()
// 					const mm= day.getMonth()+1
// 					const yy= day.getFullYear()
// 					const newDate= dd+'-'+mm+'-'+yy
// 					const newUser=  new User({
// 						image:'',
// 						username:req.body.username,
// 						email:req.body.email,
// 						role:req.body.role,
// 						password:hash,
// 						isApproved:req.body.isApproved,
// 						date:newDate,
// 						link:req.body.link
// 					})
// 					newUser.save()
// 					.then(user=>{
// 						console.log(user)
// 						res.json({massage:"user created success full "})
// 					})
// 					.catch(err=>{
// 						console.log(err)
// 					})
// 				}
// 			}))
// 		}
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 		res.json({massage:"server error occurd "})
// 	})
// })

// image upload


const createEmployee= (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    // const verify =employeeValidator.employeeValidator(req.body)
    // if(!verify.isValid){
    //     return res.status(400).json(verify.err)
    // }
    new employeeModel({
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        expertise:req.body.expertise,
        address:req.body.address,
        joinDate:req.body.joinDate,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
        hourlyRate:req.body.hourlyRate,
        profilePicture:req.file.filename,
        picturePath:req.file.path
    }).save()
    .then(newEmployee=>{
        console.log(newEmployee)
        res.status(200).json({massage:"Employee created successfull ", employee:newEmployee})
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