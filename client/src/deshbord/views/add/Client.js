import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
import { SketchPicker } from 'react-color';

class Client  extends React.Component {
  constructor(){
    super()
    this.state={
      typeOfCompany:'',
      entrepriseName:'',
      ownerFirstName:'',
      ownerlastName:'',
      expertise:'',
      companyAddress:'',
      phoneNumber:'',
      color:''
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
  }

  
  
  // typeOfCompany:String,Snow removal, Construction, Car services
  // entrepriseName:String,
  // ownerFirstName:String,
  // ownerlastName:String,
  // expertise:String,
  // companyAddress:String,
  // phoneNumber:String,
  // color:String
  render(){
    return (
        <div className="col-md-10 offset-md-1 mt-3">
            <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Type of company</label>
                          <select name='typeOfCompany' onChange={this.changeHandler} style={{background:"#27293d"}} className="form-control">
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
                            name="entrepriseName"
                            onChange={this.changeHandler}
                            placeholder="Entreprise name"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Owner First Name</label>
                          <Input
                            name="ownerFirstName"
                            onChange={this.changeHandler}
                            placeholder="Enter owner first name"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Owner Last Name</label>
                          <Input
                            name="ownerLastName"
                            onChange={this.changeHandler}
                            placeholder="Enter owner last name"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Expertise</label>
                          <Input
                            name="expertise"
                            onChange={this.changeHandler}
                            placeholder="Expertise"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Company Address</label>
                          <Input
                            name="companyAddress"
                            onChange={this.changeHandler}
                            placeholder="Company Address"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            name="phoneNumber"
                            onChange={this.changeHandler}
                            placeholder="Phone number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Color</label>
                          <SketchPicker/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.submitHandler}  color="success" > 
                             {this.state.message?
                             "Creating ...":
                             "Add Domestic Flight"
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

export default Client