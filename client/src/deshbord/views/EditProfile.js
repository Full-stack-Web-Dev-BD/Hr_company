import React from 'react'
import { Card, CardBody , FormGroup ,Table, Col, Row, Form, Input, Button ,  } from 'reactstrap'
import { useState } from 'react'
import Axios from 'axios'

class EditProfile extends React.Component{

  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      oldPassword:'',
      newPassword:'',
      err:{}
    }
    this.onchangeHandler=this.onchangeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  onchangeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  submitHandler =(event)=>{
    event.preventDefault()
    let obj={
        name:this.state.name,
        email:this.state.email,
        oldPassword:this.state.oldPassword,
        newPassword:this.state.newPassword,
    }
    console.log(obj)
    // Axios.post('http://localhost:5000/api/create-invoice' , obj )
    // .then(invoice=>{
    //   this.setState({
    //     startDate:'',
    //     endDate:'',
    //     operator:'',
    //   })
    //   console.log(invoice.data)
    //   window.location.href=('/admin/invoice-generator')
    // })
    // .catch(err=>{
    //   this.setState({
    //     err:err.response.data
    //   })
    //   console.log(this.state)
    // })
    // console.log(this.state)
  }
  
  componentDidMount(){
    Axios.get('http://localhost:5000/api/get-allInvoice')
    .then(invoice=>{
      this.setState({
        generatodInvoice:invoice.data
      })
    })
  }
    render(){
    return (
        <>
        <div className="content mt-5">
            <div >
            <Row>
            <Card>
                <CardBody>
                <h3 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"500"}}>Update Profile </h3>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            name="name"
                            onChange={this.onchangeHandler}
                            placeholder="Enter your name"
                            type="text"
                          />
                          {/* {
                            <p className="text-danger">
                              {this.state.err.startDate?
                              this.state.err.startDate:""
                              }
                            </p>
                          } */}
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            name="email"
                            onChange={this.onchangeHandler}
                            placeholder="Enter your email"
                            type="email"
                          />
                        </FormGroup>
                        
                        {/* {
                            <p className="text-danger">
                              {this.state.err.endDate?
                              this.state.err.endDate:""
                              }
                            </p>
                          } */}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Old Password</label>
                          <Input
                            name="oldPassword"
                            onChange={this.onchangeHandler}
                            placeholder="Enter old password"
                            type="password"
                          />
                          {/* {
                            <p className="text-danger">
                              {this.state.err.startDate?
                              this.state.err.startDate:""
                              }
                            </p>
                          } */}
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>New Password</label>
                          <Input
                            name="newPassword"
                            onChange={this.onchangeHandler}
                            placeholder="Enter new password"
                            type="password"
                          />
                        </FormGroup>
                        
                        {
                            <p className="text-danger">
                              {this.state.err.endDate?
                              this.state.err.endDate:""
                              }
                            </p>
                          }
                      </Col>
                    </Row>
                    <Button   type="submit" color="primary" onClick={this.submitHandler}  > Update Profile</Button >
                  </Form>
                </CardBody>
            </Card>
            </Row>
            </div>
        </div>
        </>
    )
  }
}

export default EditProfile