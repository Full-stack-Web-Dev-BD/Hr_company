


const shiftValidator =(info)=>{
    
    let err={}
    if(!info.employeeID){
        err.employeeID=" Employee ID Requird "
    }
    if(!info.companyID){
        err.companyID="Company ID  Requird"
    }

    if(!info.date){
        err.date="Date is Requird"
    }
    if(!info.startTime){
        err.startTime="Start Time is Requird"
    }
    if(!info.endTime){
        err.endTime="End Time is Requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



module.exports = {shiftValidator}