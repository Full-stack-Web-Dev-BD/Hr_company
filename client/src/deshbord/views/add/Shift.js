import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
class Shift  extends React.Component {
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
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>OPERATOR</label>
                          <Input
                            onChange={this.changeHandler}
                            name="operator"
                            placeholder="Enter Opereator Name"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>ICAO</label>
                          <Input
                            name="icao"
                            onChange={this.changeHandler}
                            placeholder="ICAO"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label> AIRCRAFT TYPE</label>
                          <Input
                            name="aircraft"
                            onChange={this.changeHandler}
                            placeholder="Enter  Aircraft Type"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>CALLSIGN</label>
                          <Input
                            name="callsign"
                            onChange={this.changeHandler}
                            placeholder="CallSign"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>ORIGIN</label>
                          <select name="origin" onChange={this.changeHandler} style={{background:"#27293d"}} className="form-control">
                              <option>Choose a  Origin</option>
                              <option value="ASV" >ASV</option>
                              <option value="EDL" >EDL</option>
                              <option value="GAS" >GAS</option>
                              <option value="GGM" >GGM</option>
                              <option value="HOA" >HOA</option>
                              <option value="ILU" >ILU</option>
                              <option value="JJM" >JJM</option>
                              <option value="KEY" >KEY</option>
                              <option value="KIS" >KIS</option>
                              <option value="KTL" >KTL</option>
                              <option value="LAU" >LAU</option>
                              <option value="LKG" >LKG</option>
                              <option value="LOK" >LOK</option>
                              <option value="MBA" >MBA</option>
                              <option value="MRE" >MRE</option>
                              <option value="MYD" >MYD</option>
                              <option value="NBO" >NBO</option>
                              <option value="NYE" >NYE</option>
                              <option value="NYK" >NYK</option>
                              <option value="OYL" >OYL</option>
                              <option value="UAS" >UAS</option>
                              <option value="UKA" >UKA</option>
                              <option value="WIL" >WIL</option>
                              <option value="WJR" >WJR</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>DESTINATION</label>
                          <select name='destination' onChange={this.changeHandler}  style={{background:'#27293d'}} className="form-control">
                              <option>Choose a  Destination</option>
                              <option value="ASV" >ASV</option>
                              <option value="EDL" >EDL</option>
                              <option value="GAS" >GAS</option>
                              <option value="GGM" >GGM</option>
                              <option value="HOA" >HOA</option>
                              <option value="ILU" >ILU</option>
                              <option value="JJM" >JJM</option>
                              <option value="KEY" >KEY</option>
                              <option value="KIS" >KIS</option>
                              <option value="KTL" >KTL</option>
                              <option value="LAU" >LAU</option>
                              <option value="LKG" >LKG</option>
                              <option value="LOK" >LOK</option>
                              <option value="MBA" >MBA</option>
                              <option value="MRE" >MRE</option>
                              <option value="MYD" >MYD</option>
                              <option value="NBO" >NBO</option>
                              <option value="NYE" >NYE</option>
                              <option value="NYK" >NYK</option>
                              <option value="OYL" >OYL</option>
                              <option value="UAS" >UAS</option>
                              <option value="UKA" >UKA</option>
                              <option value="WIL" >WIL</option>
                              <option value="WJR" >WJR</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/*  thi is  exit and entry way point */}
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>ENTRY WAYPOINT</label>
                          <select name='entryWayPoint' onChange={this.changeHandler} style={{background:"#27293d"}} className="form-control">
                              <option style={{ color:"white"}}>Choose a Entry Way Poing</option>
                              <option value="EPLAS">EPLAS</option>
                              <option value="ANTAX">ANTAX</option>
                              <option value="AVAGI">AVAGI</option>
                              <option value="RUDOL">RUDOL</option>
                              <option value="ALEMU">ALEMU</option>
                              <option value="AVEDI">AVEDI</option>
                              <option value="MANDERA">MANDERA</option>
                              <option value="ENABO">ENABO</option>
                              <option value="KESOM">KESOM</option>
                              <option value="GETAT">GETAT</option>
                              <option value="ITMAR">ITMAR</option>
                              <option value="NETAR">NETAR</option>
                              <option value="ANVET">ANVET</option>
                              <option value="XABON">XABON</option>
                              <option value="AMSAD">AMSAD</option>
                              <option value="KISAK">KISAK</option>
                              <option value="ITSIR">ITSIR</option>
                              <option value="AVIGO">AVIGO</option>
                              <option value="ELAVA">ELAVA</option>
                              <option value="UVUKO">UVUKO</option>
                              <option value="EPTEL">EPTEL</option>
                              <option value="LUDOL">LUDOL</option>
                              <option value="AVUNO">AVUNO</option>
                              <option value="UTATA">UTATA</option>
                              <option value="APDIK">APDIK</option>
                              <option value="EVATO">EVATO</option>
                              <option value="XAKRI">XAKRI</option>
                              <option value="MAGAD">MAGAD</option>
                              <option value="PARIN">PARIN</option>
                              <option value="APLOG">APLOG</option>
                              <option value="AKUMU">AKUMU</option>
                              <option value="ALKON">ALKON</option>
                              <option value="GONGU">GONGU</option>
                              <option value="PATAR">PATAR</option>
                          </select>
                        </FormGroup>
                      </Col>
                      
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>EXIT WAYPOINT</label>
                          <select name='exitWayPoint' onChange={this.changeHandler} style={{background:"#27293d"}} className="form-control">
                              <option style={{ color:"white"}}>Choose a Exit Way Poing</option>
                              <option value="EPLAS">EPLAS</option>
                              <option value="ANTAX">ANTAX</option>
                              <option value="AVAGI">AVAGI</option>
                              <option value="RUDOL">RUDOL</option>
                              <option value="ALEMU">ALEMU</option>
                              <option value="AVEDI">AVEDI</option>
                              <option value="MANDERA">MANDERA</option>
                              <option value="ENABO">ENABO</option>
                              <option value="KESOM">KESOM</option>
                              <option value="GETAT">GETAT</option>
                              <option value="ITMAR">ITMAR</option>
                              <option value="NETAR">NETAR</option>
                              <option value="ANVET">ANVET</option>
                              <option value="XABON">XABON</option>
                              <option value="AMSAD">AMSAD</option>
                              <option value="KISAK">KISAK</option>
                              <option value="ITSIR">ITSIR</option>
                              <option value="AVIGO">AVIGO</option>
                              <option value="ELAVA">ELAVA</option>
                              <option value="UVUKO">UVUKO</option>
                              <option value="EPTEL">EPTEL</option>
                              <option value="LUDOL">LUDOL</option>
                              <option value="AVUNO">AVUNO</option>
                              <option value="UTATA">UTATA</option>
                              <option value="APDIK">APDIK</option>
                              <option value="EVATO">EVATO</option>
                              <option value="XAKRI">XAKRI</option>
                              <option value="MAGAD">MAGAD</option>
                              <option value="PARIN">PARIN</option>
                              <option value="APLOG">APLOG</option>
                              <option value="AKUMU">AKUMU</option>
                              <option value="ALKON">ALKON</option>
                              <option value="GONGU">GONGU</option>
                              <option value="PATAR">PATAR</option>
                          </select>
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
