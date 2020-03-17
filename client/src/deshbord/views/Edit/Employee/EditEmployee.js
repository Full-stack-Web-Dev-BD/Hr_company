
import React, { useState ,useEffect} from 'react';
import { Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
import Axios from 'axios';
const EditEmployee = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [EmployeeInfo, setEmployeeInfo]=useState({})
    const Employee= props.Employee
    const [doneBTN, setDoneBTN]= useState(' Done')

  useEffect(()=>{
    setEmployeeInfo(Employee)
  },[])

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    const changeHandler=(event)=>{
      console.log(EmployeeInfo)
      setEmployeeInfo({...EmployeeInfo, 
        [event.target.name ]:event.target.value
      })
    }
    const submitHandler= ()=>{
      setDoneBTN('Update Employee  . . .')
      console.log(EmployeeInfo)
      Axios.post('http://localhost:5000/update-Employee/'+Employee._id , EmployeeInfo)
      .then(Employee=>{
        setTimeout(() => {
          setDoneBTN('Done')
          window.location.href=('/admin/all-Employee')
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
                    <h3 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}> Edit  Employee</h3>
                    <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>First Name</label>
                            <Input
                              name="firstName"
                              onChange={changeHandler}
                              placeholder="First Name"
                              className="placeColorBlack"
                              defaultValue={Employee.firstName}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>Last Name</label>
                            <Input
                              name="lastName"
                              onChange={changeHandler}
                              className="placeColorBlack"
                              defaultValue={Employee.lastName}
                              placeholder="Last  Name"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            onChange={changeHandler}
                            name="address"
                            className="placeColorBlack"
                            defaultValue={Employee.address}
                            placeholder="Address"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Join Date</label>
                          <Input
                            defaultValue={Employee.joinDate}
                            name="Join Date"
                            className="placeColorBlack"
                            onChange={changeHandler}
                            placeholder="Join Date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label> Expertise</label>
                          <Input
                            name="expertise"
                            className="placeColorBlack"
                            defaultValue={Employee.expertise}
                            onChange={changeHandler}
                            placeholder="Expertise "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            className="placeColorBlack"
                            name="phoneNumber"
                            defaultValue={Employee.phoneNumber}
                            onChange={changeHandler}
                            placeholder="Phone Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            className="placeColorBlack"
                            name="email"
                            defaultValue={Employee.email}
                            onChange={changeHandler}
                            placeholder="Email"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Hourly Rate</label>
                          <Input
                            className="placeColorBlack"
                            name="hourlyRate"
                            defaultValue={Employee.hourlyRate}
                            onChange={changeHandler}
                            placeholder="Hourly Rate"
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
export default EditEmployee