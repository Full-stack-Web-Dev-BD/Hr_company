import React from "react";
import EditShift from './EditShift'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  CardFooter
} from "reactstrap";
import { useEffect , useState } from "react";
import Details from './Details'
import Axios from "axios";
import DeleteModal from "./DeleteModal";

const AllShift =()=>{
  const [AllShift , setAllShift]=useState([])
    useEffect(()=>{
      Axios.get('http://localhost:5000/all-shift')
      .then(res=>{
        if(res.data.length<1){
          let ex=[
            
          ]
          console.log('done')
          return setAllShift(ex)
        }
        if(res.data.length>0){
          return setAllShift(res.data)
        }
      })
      .catch(err=>{
        console.log(err)
      })
    } , [])
    const iterator=(single)=>{
      let x = "Completed"
      for (let key in single) {
        console.log(key , single[key])
        if(single[key]==""){
          console.log('finde out ' ,key , single[key])
          if(key=="__v"){
              //for skiping this time 
          }else{
            x="Uncompleted"
          }
        }
      }
      return x
    }
    const DeleteShift =(id)=>{
      Axios.get('http://localhost:5000/delete-shift/'+id)
      .then(flight=>{
        // window.location.href=('/admin/edit')
      })
      .catch(err=>{
        console.log(err)
      })
    }
    const doCompleted=(id)=>{
      Axios.get('http://localhost:5000/do-completed/'+id)
      .then(res=>{
        console.log(res)
        window.location.href='/admin/all-shift'
      })
    }
    const sortShift=(event)=>{
      Axios.post('http://localhost:5000/sort',{text:event.target.value})
      .then(res=>{
        setAllShift(res.data)
      })
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="allShift">
                    <div className="d-flex">
                      <h1 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}>All Shift <span style={{fontSize:"14px"}}>( All )</span></h1>
                      <form className="ml-5">
                        <label>Enter employee name</label>
                        <div  className="d-flex">
                          <input className=" ml-1 mr-3 form-control" placeholder="Enter employee name" name="employeeName"/>
                          <button className="btn btn-sm btn-success">Search</button>
                        </div>
                      </form>
                      <div style={{display:"inline-block", marginLeft:'auto'}}>
                        <select onChange={sortShift} className="form-control">
                          <option style={{backgroundColor:'#27293D',color:'white'}} value="no sort">Select to sort</option>
                          <option style={{backgroundColor:'#27293D',color:'white'}} value="Completed">Sort by Completeed</option>
                          <option style={{backgroundColor:'#27293D',color:'white'}} value="Uncompleted">Sort by Uncompleteed</option>
                          <option style={{backgroundColor:'#27293D',color:'white'}} value="no sort">No Sort</option>
                        </select>
                      </div>
                    </div>
                    <Table className="tablesorter  pb-5 mb-5" responsive>
                      <thead className="text-success">
                        <tr>
                          <th>Employee ID</th>
                          <th>Company ID</th>
                          <th>Date  </th>
                          <th>Start Time </th>
                          <th>End Time </th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllShift.map((single)=>{
                       return(
                          <tr style={{backgroundColor:`${single.color}`, cursor:"pointer"}} >
                            <td> {single.employeeID}  </td>
                            <td >{single.companyID} </td>
                            <td > {single.date} </td>
                            <td > {single.startTime} </td>
                            <td > {single.endTime} </td>
                            <td > {single.completed?
                            <p className="text-success">Completed</p>:
                            <p className="text-danger">Uncompleted</p>
                            } </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="success" size="sm">Action</Button>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#3578E5" }}>
                                  <span  class="dropdown-item " style={{color:"white"}}>
                                    <EditShift   Shift={single}/>
                                  </span>
                                    <a class="dropdown-item "style={{color:"white" , fontSize:"18px"}} href="#" onClick={()=> doCompleted(single._id)}>{single.completed?"Uncomplete":"Completed"}</a>
                                  <a class="dropdown-item "style={{color:"white" , fontSize:"18px"}} href="#">
                                  <DeleteModal style={{display:"none"}} flight={single} deleteFunction={DeleteShift}/>
                                  </a>
                                  <a class="dropdown-item "style={{color:"white" , fontSize:"18px"}} href="#">
                                  <Details style={{display:"none"}} flight={single} />
                                  </a>
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
      </>
    );
}

export default AllShift;
