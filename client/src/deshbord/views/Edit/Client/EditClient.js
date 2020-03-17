
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
                  <h3 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}> Edit  client</h3>
                    <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                          <label>Type of company</label>
                          <select name='typeOfCompany' onChange={changeHandler} defaultValue={client.typeOfCompany} style={{background:"#27293d"}} className="form-control">
                            <option>Select a type</option>
                            <option value="Snow removal">Snow removal</option>
                            <option value="Construction"> Construction</option>
                            <option value="Car services">Car services</option>
                          </select>
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>Entreprise Name</label>
                            <Input
                              style={{color:'white'}}
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
                              style={{color:'white'}}
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
                              style={{color:'white'}}
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
                            style={{color:'white'}}
                            />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            className="placeColorBlack"
                            name="phoneNumber"
                            type="number"
                            defaultValue={client.phoneNumber}
                            onChange={changeHandler}
                            placeholder="Phone Number"
                            style={{color:'white'}}
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
                            style={{color:'white'}}
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <h6 style={{textDecoration:'underline'}}>Added Note :-</h6>
                    {client.note.length>0?
                    client.note.map(note=>{
                      return(
                      <p style={{color:"white"}}>{note}</p>
                      )
                    }):<p style={{color:"white"}}>Empty List !</p>
                    }
                    <Row>
                      <Col className="px-md-1" md="12">
                        <FormGroup>
                          <label>Add More Note </label>
                          <Input
                            className="placeColorBlack"
                            name="note"
                            type="textarea"
                            onChange={changeHandler}
                            placeholder="Add New Note Here ..."
                            style={{color:'white'}}
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