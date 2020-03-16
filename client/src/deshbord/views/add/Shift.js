import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
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
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Employee ID</label>
                          <Input
                            name="employeeID"
                            onChange={this.changeHandler}
                            placeholder="Employee ID "
                            type="dateOnly"
                          />
                          <p className="text-danger">
                            {this.state.err.employeeID ?
                             this.state.err.employeeID
                             :''
                             }
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Company ID</label>
                          <Input
                            name="companyID"
                            onChange={this.changeHandler}
                            placeholder="Company ID"
                          />
                          <p className="text-danger">
                            {this.state.err.companyID?this.state.err.companyID:''}
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Date</label>
                          <Input
                            onChange={this.changeHandler}
                            name="date"
                            type="date"
                            placeholder="Date"
                          />
                          
                          <p className="text-danger">
                            {this.state.err.date?this.state.err.date:''}
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Start Time</label>
                          <Input
                            name="startTime"
                            onChange={this.changeHandler}
                            placeholder="Start Time"
                          />
                          
                          <p className="text-danger">
                            {this.state.err.startTime?this.state.err.startTime:''}
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label> End Time</label>
                          <Input
                            name="endTime"
                            onChange={this.changeHandler}
                            placeholder="End Time"
                          />
                          
                          <p className="text-danger">
                            {this.state.err.endTime?this.state.err.endTime:''}
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.submitHandler}  color="success" > 
                             {this.state.message?
                             "Creating...":
                             "Add Shift"
                             }
                    </Button>
                  </Form>
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
