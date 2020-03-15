import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
import { CompactPicker  } from 'react-color';

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
      color:'#fda1ff',
      err:{}
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
  colorHandler=(color)=>{
    if(color.hex==="#ffffff"){
      return this.setState({
        color:"#99999"
      })
    }
    this.setState({
      color:color.hex
    })
  }

  submitHandler=(event)=>{
    event.preventDefault()
    Axios.post('http://localhost:5000/create-client', this.state)
    .then(res=>{
      console.log(res)
      window.location.href='/admin/all-Client'
    })
    .catch(err=>{
      this.setState({
        err:err.response.data
      })
    })
  }
 render(){
    return (
        <div className="col-md-10 offset-md-1 mt-3">
            <Card>
                <CardBody className="p-4">
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
                          <p className="text-danger">
                            {this.state.err.typeOfCompany?
                            this.state.err.typeOfCompany:''
                            }
                          </p>
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
                          
                          <p className="text-danger">
                            {this.state.err.entrepriseName?
                            this.state.err.entrepriseName:''
                            }
                          </p>
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
                          
                          <p className="text-danger">
                            {this.state.err.ownerFirstName?
                            this.state.err.ownerFirstName:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Owner Last Name</label>
                          <Input
                            name="ownerlastName"
                            onChange={this.changeHandler}
                            placeholder="Enter owner last name"
                          />
                          
                          <p className="text-danger">
                            {this.state.err.ownerlastName?
                            this.state.err.ownerlastName:''
                            }
                          </p>
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
                          
                          <p className="text-danger">
                            {this.state.err.expertise?
                            this.state.err.expertise:''
                            }
                          </p>
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
                          
                          <p className="text-danger">
                            {this.state.err.companyAddress?
                            this.state.err.companyAddress:''
                            }
                          </p>
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
                          
                          <p className="text-danger">
                            {this.state.err.phoneNumber?
                            this.state.err.phoneNumber:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <p >Please Select a color  ({this.state.color})</p>
                          <div>
                          <CompactPicker onChange={this.colorHandler}  />
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.submitHandler}  color="success" > Add Client</Button>
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