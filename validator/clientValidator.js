const clientValidator =(info)=>{
    
    let err={}
    if(!info.typeOfCompany){
        err.typeOfCompany="Plese Select Type of Company  !"
    }
    if(!info.entrepriseName){
        err.entrepriseName="Entreprise Name Requird"
    }

    if(!info.ownerFirstName){
        err.ownerFirstName="Entreprise owner First Name is Requird"
    }
    if(!info.ownerlastName){
        err.ownerlastName="Entreprise owner Last Name is Requird"
    }
    if(!info.expertise){
        err.expertise="Expertise is Requird"
    }
    if(!info.companyAddress){
        err.companyAddress="Company Address is Requird"
    }
    if(!info.phoneNumber){
        err.phoneNumber="Phone Number  is Requird"
    }
    if(!info.color){
        err.color="Color  is Requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}
module.exports = {clientValidator}