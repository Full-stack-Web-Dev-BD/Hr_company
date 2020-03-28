import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
import {Link} from 'react-router-dom'
class Shift  extends React.Component {
  constructor(){
    super()
    this.state={    
      employeeID:'',
      companyID:'',
      date:'',
      startTime:'',
      endTime:'',
      err:{},
      message:""
    }
    this.changeHandler=this.changeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=()=>{
    let shiftInfo={
      employeeID:this.state.employeeID,
      companyID:this.state.companyID,
      date:this.state.date,
      startTime:this.state.startTime,
      endTime:this.state.endTime,
    }
    Axios.post('/create-shift',shiftInfo)
    .then(result=>{
      this.setState({     
        employeeID:'',
        companyID:'',
        date:'',
        startTime:'',
        endTime:'',
        err:{},
        message:result.data.message
      })
      setTimeout(() => {
        this.setState({
          message:""
        })
        window.location.href=('/admin/all-shift')
      }, 500);
    })
    .catch(err=>{
      this.setState({
        err:err.response.data
      })
    console.log(this.state)
    })
  }
  render(){
    return (
        <div className="col-md-10 offset-md-1 mt-3">
            <Card>
                <CardBody>
                  <h2 className="text-center mt-5 text-success pt-5"> Please go to employee table to create Shift</h2>
                  <p className="text-center"> Go to <Link to='/admin/all-employee'>Employee Table</Link></p>
                </CardBody>
                <p style={{visibility:"hidden" , lineHeight:"0"}}>
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                </p>
            </Card>
        </div>
    )
  }
}

export default Shift




// EPLAS
// ANTAX
// AVAGI
// RUDOL
// ALEMU
// AVEDI
// MANDERA
// ENABO
// KESOM
// GETAT
// ITMAR
// NETAR
// ANVET
// XABON
// AMSAD
// KISAK
// ITSIR
// AVIGO
// ELAVA
// UVUKO
// EPTEL
// LUDOL
// AVUNO
// UTATA
// APDIK
// EVATO
// XAKRI
// MAGAD
// PARIN
// APLOG
// AKUMU
// ALKON
// GONGU
// PATAR
