
import React, { useState ,useEffect} from 'react';
import { Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
import Axios from 'axios';
const EditShift = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [ShiftInfo, setShiftInfo]=useState({})
    const Shift= props.Shift
    const [doneBTN, setDoneBTN]= useState(' Done')

  useEffect(()=>{
    setShiftInfo(Shift)
  },[])

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    const changeHandler=(event)=>{
      console.log(ShiftInfo)
      setShiftInfo({...ShiftInfo, 
        [event.target.name ]:event.target.value
      })
    }

    const selectHandler= (event)=>{
      setShiftInfo({...ShiftInfo, 
        completed:event.target.value==='on'?true:false
      })
    }
    const submitHandler= ()=>{
      setDoneBTN('Update Shift  . . .')
      console.log(ShiftInfo)
      Axios.post('http://localhost:5000/update-Shift/'+Shift._id , ShiftInfo)
      .then(Shift=>{
        setTimeout(() => {
          setDoneBTN('Done')
          window.location.href=('/admin/all-Shift')
        },0);

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
                    <h3 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}> Edit  Shift</h3>
                    <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Employee ID</label>
                            <Input
                              style={{color:"black"}}
                              name="employeeID"
                              onChange={changeHandler}
                              placeholder="Employee ID"
                              className="placeColorBlack"
                              defaultValue={Shift.employeeID}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>Company ID</label>
                            <Input
                              name="companyID"
                              onChange={changeHandler}
                              className="placeColorBlack"
                              defaultValue={Shift.companyID}
                              placeholder="Employee ID"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Date</label>
                          <Input
                            onChange={changeHandler}
                            name="date"
                            className="placeColorBlack"
                            defaultValue={Shift.date}
                            placeholder="Date"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Start Time </label>
                          <Input
                            defaultValue={Shift.startTime}
                            name="startTime"
                            className="placeColorBlack"
                            onChange={changeHandler}
                            placeholder="Start Time"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label> End  Time</label>
                          <Input
                            name="endTime"
                            className="placeColorBlack"
                            defaultValue={Shift.endTime}
                            onChange={changeHandler}
                            placeholder="Start Time "
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter className="d-flex">
                    <Button onClickCapture={submitHandler} color="primary" > {doneBTN} </Button>
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditShift