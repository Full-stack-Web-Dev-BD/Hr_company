import React from 'react'
import { Card,Label, CustomInput, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
import { CompactPicker  } from 'react-color';

class Employee  extends React.Component {
  constructor(){
    super()
    this.state={
      firstName:'',
      lastName:'',
      expertise:'',
      address:'',
      joinDate:'',
      phoneNumber:'',
      email:'',
      hourlyRate:'',
      file:{},
      imageName:"Select a image",
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
    const formData=new FormData()
    
   formData.append('firstName', this.state.firstName)
   formData.append('lastName', this.state.lastName)
   formData.append('expertise', this.state.expertise)
   formData.append('address', this.state.address)
   formData.append('joinDate', this.state.joinDate)
   formData.append('phoneNumber', this.state.phoneNumber)
   formData.append('email', this.state.email)
   formData.append('hourlyRate', this.state.hourlyRate)
   formData.append('file', this.state.file)
   console.log(this.state)
   Axios.post('http://localhost:5000/create-employee',formData)
   .then(res=>{
     window.location.href='/admin/all-employee'
   })
}
  
  onFileChoose=(event)=>{
    console.log(event.target.files[0].name)
    console.log(event.target.files[0].name)
    console.log(event.target.files[0])
    this.setState({
      imageName: event.target.files[0].name,
      file : event.target.files[0]
    })
    console.log(this.state)
   
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
                          <label>First  Name</label>
                          <Input
                            name="firstName"
                            onChange={this.changeHandler}
                            placeholder="First  name"
                          />
                          <p className="text-danger">
                            {this.state.err.firstName?
                            this.state.err.firstName:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            name="lastName"
                            onChange={this.changeHandler}
                            placeholder="Last name"
                          />
                          <p className="text-danger">
                            {this.state.err.lastName?
                            this.state.err.lastName:''
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
                          <Label for="exampleCustomFileBrowser">Select a image for profile pictuer</Label>
                          <CustomInput onChange={this.onFileChoose} type="file" id="exampleCustomFileBrowser" name="customFile" label={this.state.imageName} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Join Date</label>
                          <Input
                            name="joinDate"
                            onChange={this.changeHandler}
                            placeholder="Join Date"
                          />
                          <p className="text-danger">
                            {this.state.err.joinDate?
                            this.state.err.joinDate:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            name="phoneNumber"
                            onChange={this.changeHandler}
                            placeholder="Phone Number"
                          />
                          <p className="text-danger">
                            {this.state.err.phoneNumber?
                            this.state.err.phoneNumber:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            name="email"
                            onChange={this.changeHandler}
                            placeholder="Email"
                          />
                          <p className="text-danger">
                            {this.state.err.email?
                            this.state.err.email:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                      
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Hourly Rate</label>
                          <Input
                            name="hourlyRate"
                            onChange={this.changeHandler}
                            placeholder="Hourly Rate"
                          />
                          <p className="text-danger">
                            {this.state.err.hourlyRate?
                            this.state.err.hourlyRate:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col className="px-md-1" md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            name="address"
                            onChange={this.changeHandler}
                            placeholder=" Address"
                          />
                          <p className="text-danger">
                            {this.state.err.address?
                            this.state.err.address:''
                            }
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.submitHandler}  color="success" > Add Employee</Button>
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