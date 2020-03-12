const employeeValidator =(info)=>{
//  Firstname, Lastname, Expertise, Address, Join date, Phone number, Email, Hourly rate, Profile picture
    let err={}

    if(!info.firstName){
        err.firstName="First Name is Requird"
    }
    if(!info.lastName){
        err.lastName="Last Name is Requird"
    }
    if(!info.expertise){
        err.expertise="Expertise is Requird"
    }
    if(!info.address){
        err.address="Address is Requird"
    }
    if(!info.joinDate){
        err.joinDate="Join Date is Required "
    }
    if(!info.phoneNumber){
        err.phoneNumber="Phone Number  is Requird"
    }
    if(!info.email){
        err.email="Email  is Requird"
    }
    if(!info.hourlyRate){
        err.hourlyRate="Hourly Rate  is Requird"
    }
    if(!info.profilePicture){
        err.profilePicture="Profile Picture   is Requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}
module.exports = {employeeValidator}