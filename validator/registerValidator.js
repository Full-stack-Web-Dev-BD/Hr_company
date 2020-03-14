const validator=require('validator')


const registervalidator =(info)=>{
    const err={}
    if(!info.firstName){
        err.firstName="First Name Requird"
    }if(!info.lastName){
        err.lastName="Last Name Requird"
    }
    if(!info.email){
        err.email="Email Requird"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password Requird"
    } else if(info.password.length <6){
        err.password="Password Length should be gatter then 6 Charecter"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}




const loginValidator =(info)=>{
    
    let err={}
    if(!info.email){
        err.email="Email Requird"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password Requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



module.exports ={
    login:loginValidator,
    register:registervalidator
}