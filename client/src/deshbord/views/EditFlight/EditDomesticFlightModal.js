import Axios from 'axios'
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';

const EditDomesticModal = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const existingFlightInfo= props.flight
    const [doneBTN, setDoneBTN]= useState(' Done')
    const [flightInfo, setFlightInfo]=useState({})

    const toggle = () => setOpen(!open);

    const changeHandler=(event)=>{
      console.log(flightInfo)
      setFlightInfo({...flightInfo, 
        [event.target.name ]:event.target.value
      })
    }
    const submitHandler= ()=>{
      Axios.post('http://localhost:5000/api/edit-domestic-flight/'+existingFlightInfo._id , flightInfo)
      .then(flight=>{
        setDoneBTN('Flight Updating . . .')
        setTimeout(() => {
          setDoneBTN('Done')
          window.location.href=('/admin/edit-domestic-flight')
        }, 1500);

      })
    }
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <p style={{fontSize:"18px" , color:"white", cursor:"pointer" ,width: "100%",fontSize: "18px" , padding:"15px" , margin:"-15px"}} onClick={toggle}>Edit</p>
            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    
                  <Form>
                    <Row>
                      <h3 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}> Edit International Flight</h3>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>DATE & TIME</label>
                            <Input
                              style={{color:"black"}}
                              name="dateTime"
                              onChange={changeHandler}
                              placeholder="Enter Date & time"
                              className="placeColorBlack"
                              defaultValue={existingFlightInfo.dateTime}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>TAIL NUMBER</label>
                            <Input
                              name="tailNumber"
                              onChange={changeHandler}
                              className="placeColorBlack"
                              defaultValue={existingFlightInfo.tailNumber}
                              placeholder="Enter Tail number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>OPERATOR</label>
                          <Input
                            onChange={changeHandler}
                            name="operator"
                            className="placeColorBlack"
                            defaultValue={existingFlightInfo.operator}
                            placeholder="Enter Opereator Name"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>ICAO</label>
                          <Input
                            defaultValue={existingFlightInfo.icao}
                            name="icao"
                            className="placeColorBlack"
                            onChange={changeHandler}
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
                            className="placeColorBlack"
                            defaultValue={existingFlightInfo.aircraft}
                            onChange={changeHandler}
                            placeholder="Enter  Aircraft Type"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>CALLSIGN</label>
                          <Input
                            className="placeColorBlack"
                            name="callsign"
                            defaultValue={existingFlightInfo.callsign}
                            onChange={changeHandler}
                            placeholder="CallSign"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>ORIGIN</label>
                          <select defaultValue="{existingFlightInfo.origin}" name="origin" onChange={changeHandler} style={{background:"white"  , color:"black"}} className="form-control placeColorBlack">
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
                          <select name='destination' defaultValue={existingFlightInfo.destination} onChange={changeHandler}  style={{background:"white"  , color:"black"}}className="form-control placeColorBlack">
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
                  </Form>
                </ModalBody>
                <ModalFooter className="d-flex">
                    <Button color="success" onClick={submitHandler}> {doneBTN} </Button>
                    <Button color="success" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditDomesticModal