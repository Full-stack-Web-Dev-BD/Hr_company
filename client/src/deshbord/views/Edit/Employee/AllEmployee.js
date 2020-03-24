import React from "react";
import EditEmployee from './EditEmployee'
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
import deleteModal from  './DeleteModal'
import { useEffect , useState } from "react";
import Axios from "axios";
import DeleteModal from "./DeleteModal";

const AllEmployee =()=>{
  const [allEmployee , setallEmployee]=useState([])
    useEffect(()=>{
      Axios.get('http://localhost:5000/all-Employee')
      .then(res=>{
        if(res.data.length<1){
          let ex=[
            {ex:''},
            {ex:''},
            {ex:''}
          ]
          console.log('done')
          return setallEmployee(ex)
        }
        if(res.data.length>0){
          return setallEmployee(res.data)
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
    const DeleteEmployee =(id)=>{
      Axios.get('http://localhost:5000/delete-employee/'+id)
      .then(flight=>{
        // window.location.href=('/admin/edit-domestic-flight')
      })
      .catch(err=>{
        console.log(err)
      })
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="internationalFlight">
                    <div>
                      <h1 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}>All Employee <span style={{fontSize:"14px"}}>( All )</span></h1>
                    </div>
                    <Table className="tablesorter  pb-5 mb-5" responsive>
                      <thead className="text-success">
                        <tr>
                          <th>Name</th>
                          <th>Picture</th>
                          <th>Experitise  </th>
                          <th>Join Date  </th>
                          <th>ID</th>
                          <th>Phone Number </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allEmployee.map((single)=>{
                       return(
                          <tr style={{backgroundColor:`${single.color}`, cursor:"pointer"}} >
                            {console.log(single)}
                            <td> {single.firstName}<span> {single.lastName} </span> </td>
                            <td > <img style={{maxWidth:'70px', maxHeight:'80px'}} src={require(`../../../../../uploads/${single.profilePicture}`)}/>  </td>
                            <td > {single.expertise} </td>
                            <td > {single.joinDate} </td>
                            <td > {single._id} </td>
                            <td > {single.phoneNumber} </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="success" size="sm">Action</Button>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#3578E5" }}>
                                  <span  class="dropdown-item " style={{color:"white"}}>
                                    <EditEmployee   Employee={single}/>
                                  </span>
                                  <a class="dropdown-item "style={{color:"white" , fontSize:"18px"}} href="#">
                                  <DeleteModal style={{display:"none"}} flight={single} deleteFunction={DeleteEmployee}/>
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

export default AllEmployee;
// picturePath