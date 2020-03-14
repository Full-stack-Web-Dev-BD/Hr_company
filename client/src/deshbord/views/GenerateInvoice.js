import React from 'react'
import { Card, CardBody , FormGroup ,Table, Col, Row, Form, Input, Button ,  } from 'reactstrap'
import { useState } from 'react'
import Axios from 'axios'

class GenereateInvoice extends React.Component{

  constructor(){
    super()
    this.state={
      startDate:'',
      endDate:'',
      operator:'',
      generatodInvoice:[],
      err:{}
    }
    this.onchangeHandler=this.onchangeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  deleteHandler=(id)=>{
    Axios.get('http://localhost:5000/api/delete-invoice/'+id)
    .then(done=>{
      console.log('done')
      window.location.href="/admin/invoice-generator"
    })
    .catch(err=>{
      console.log(err)
    })
  }
  onchangeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  submitHandler =(event)=>{
    event.preventDefault()
    let obj={
      endDate:this.state.endDate,
      startDate:this.state.startDate,
      operator:this.state.operator
    }
    Axios.post('http://localhost:5000/api/create-invoice' , obj )
    .then(invoice=>{
      this.setState({
        startDate:'',
        endDate:'',
        operator:'',
      })
      console.log(invoice.data)
      window.location.href=('/admin/invoice-generator')
    })
    .catch(err=>{
      console.log(err.response.data)
      
      
      this.setState({
        err:err.response.data
      })
      console.log(this.state)
    })
    console.log(this.state)
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
            <div className="col-md-8 offset-md-2 mt-5">
            <Row>
            <Card>
                <CardBody>
                <h3 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"500"}}>Genereate Invoice </h3>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>START DATE</label>
                          <Input
                            name="startDate"
                            onChange={this.onchangeHandler}
                            placeholder="Enter Start Date"
                            type="date"
                          />
                          {
                            <p className="text-danger">
                              {this.state.err.startDate?
                              this.state.err.startDate:""
                              }
                            </p>
                          }
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>END DATE</label>
                          <Input
                            name="endDate"
                            onChange={this.onchangeHandler}
                            placeholder="Enter End Date"
                            type="date"
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
                    <Row>
                      <Col className="pr-md-1" md="12">
                        <FormGroup>
                          <label>OPERATOR</label>
                          <Input
                            name="operator"
                            onChange={this.onchangeHandler}
                            placeholder="Enter Opereator Name"
                            type="text"
                          />
                          
                          {
                            <p className="text-danger">
                              {this.state.err.operator?
                              this.state.err.operator:""
                              }
                            </p>
                          }
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button   type="submit" color="success" onClick={this.submitHandler}  > Add Domestic  Flight</Button >
                  </Form>
                </CardBody>
            </Card>
            </Row>
            </div>
            <div>
                
          <Row>
            <Col md="12" className="mt-5">
              <Card>
                <CardBody>
                  <div className="internationalFlight">
                    <div>
                      <h1 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}>Generated Invoice <span style={{fontSize:"14px"}}>( All )</span></h1>
                    </div>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Start time</th>
                          <th>End Time </th>
                          <th>Operator  </th>
                          <th>Invoice ID </th>
                          <th>Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.generatodInvoice.map((single, index)=>{
                       return(
                          <tr>
                            <td> {single.startDate} </td>
                            <td > {single.endDate} </td>
                            <td > {single.operator} </td>
                            <td > {single._id}</td>
                            
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="success" size="sm">Action</Button>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#3578E5" }}>
                                  < p onClick={this.deleteHandler.bind(this, single._id)} style={{fontSize:"18px" , padding:"7px", cursor:"pointer"}}>
                                  Delete
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr> 
                       )
                        })}
                        <div className="p-5"></div>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Row>
            </div>
        </div>
        </>
    )
  }
}
export default GenereateInvoice