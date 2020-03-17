
import React, { useState ,useEffect} from 'react';
import { Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
import Axios from 'axios';
const EditClient = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [clientInfo, setclientInfo]=useState({})
    const client= props.client
    const [doneBTN, setDoneBTN]= useState(' Done')

  useEffect(()=>{
    setclientInfo(client)
  },[])

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    const changeHandler=(event)=>{
      console.log(clientInfo)
      setclientInfo({...clientInfo, 
        [event.target.name ]:event.target.value
      })
    }
    const submitHandler= ()=>{
      setDoneBTN('Update client  . . .')
      console.log(clientInfo)
      Axios.post('http://localhost:5000/update-client/'+client._id , clientInfo)
      .then(client=>{
        setTimeout(() => {
          setDoneBTN('Done')
          window.location.href=('/admin/all-client')
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
                    <Row>
                      <h3 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}> Edit  client</h3>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Type Of Company</label>
                            <Input
                              style={{color:"black"}}
                              name="typeOfCompany"
                              onChange={changeHandler}
                              placeholder="Type Of Company"
                              className="placeColorBlack"
                              defaultValue={client.typeOfCompany}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>Entreprise Name</label>
                            <Input
                              name="entrepriseName"
                              onChange={changeHandler}
                              className="placeColorBlack"
                              defaultValue={client.entrepriseName}
                              placeholder="Entreprise Name"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Owner First Name</label>
                          <Input
                            onChange={changeHandler}
                            name="ownerFirstName"
                            className="placeColorBlack"
                            defaultValue={client.ownerFirstName}
                            placeholder="Owner First Name"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Owner last Name</label>
                          <Input
                            defaultValue={client.ownerlastName}
                            name="ownerlastName"
                            className="placeColorBlack"
                            onChange={changeHandler}
                            placeholder="Owner last Name"
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
                            defaultValue={client.expertise}
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
                            defaultValue={client.phoneNumber}
                            onChange={changeHandler}
                            placeholder="Phone Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="12">
                        <FormGroup>
                          <label>Company Address</label>
                          <Input
                            className="placeColorBlack"
                            name="companyAddress"
                            defaultValue={client.companyAddress}
                            onChange={changeHandler}
                            placeholder="Company Address"
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
export default EditClient