import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
class Employee  extends React.Component {
  constructor(){
    super()
    this.state={
        dateTime:'',
        tailNumber:'',
        operator:'',
        icao:'',
        aircraft:'',
        callsign:'',
        origin:'',
        destination:'',
        entryWayPoint:'',
        exitWayPoint:'',
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
    let flightInfo={
      dateTime:this.state.dateTime,
      tailNumber:this.state.tailNumber,
      operator:this.state.operator,
      icao:this.state.icao,
      aircraft:this.state.aircraft,
      callsign:this.state.callsign,
      origin:this.state.origin,
      destination:this.state.destination,
      entryWayPoint:this.state.entryWayPoint,
      exitWayPoint:this.state.exitWayPoint
    }
    Axios.post('/api/create-international-flight',flightInfo)
    .then(result=>{
      this.setState({
        dateTime:'',
        tailNumber:'',
        operator:'',
        icao:'',
        aircraft:'',
        callsign:'',
        origin:'',
        destination:'',
        entryWayPoint:'',
        exitWayPoint:'',
        err:{},
        message:result.data.message
      })
      setTimeout(() => {
        this.setState({
          message:""
        })
        window.location.href=('/admin/edit-international-flight')
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
                          <label>DATE</label>
                          <Input
                            name="dateTime"
                            onChange={this.changeHandler}
                            placeholder="Enter Date "
                            type="dateOnly"
                          />
                          <p className="text-danger">
                            {this.state.err.dateTime ?
                             this.state.err.dateTime
                             :''
                             }
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>TAIL NUMBER</label>
                          <Input
                            name="tailNumber"
                            onChange={this.changeHandler}
                            placeholder="Enter Tail number"
                          />
                          
                          <p className="text-danger">
                            {this.state.err.tailNumber?this.state.err.tailNumber:''}
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.submitHandler}  color="success" > 
                             {this.state.message?
                             "Creating...":
                             "Add International Flight"
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

export default Employee




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
