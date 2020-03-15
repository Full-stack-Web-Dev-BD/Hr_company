import React from "react";
// import EditDemosticFlight from './EditDomesticFlightModal'
import EditClient from './EditClient'
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
const tipStyle={
    color: "white",
    fontSize: "10px",
    background: "#3578E5",
    borderRadius: "3px",
    marginLeft:"5px",
    padding: "0  7px",
    cursor:"pointer"
}
const AllClient =()=>{
  const [allClient , setallClient]=useState([])
    const [domesticFlight , setDomesticFlieht]=useState([])
    useEffect(()=>{
      Axios.get('http://localhost:5000/all-client')
      .then(res=>{
        if(res.data.length<1){
          let ex=[
            {ex:''},
            {ex:''},
            {ex:''}
          ]
          console.log('done')
          console.log('done')
          console.log('done')
          console.log('done')
          console.log('done')
          return setallClient(ex)
        }
        if(res.data.length>0){
          return setallClient(res.data)
        }
      })
      .catch(err=>{
        console.log(err)
      })
    } , [])
    useEffect(()=>{
      Axios.get('http://localhost:5000/api/get-domestic-flight')
      .then(flight=>{
        setDomesticFlieht(flight.data)
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
    
    const deleteInternationalFlight =(id)=>{
      Axios.get('http://localhost:5000/api/delete-international-flight/'+id)
      .then(flight=>{
        window.location.href=('/admin/all-client')

      })
      .catch(err=>{
        console.log(err)
      })
    }
    const DeleteClient =(id)=>{
      Axios.get('http://localhost:5000/delete-client/'+id)
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
                      <h1 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}>International Flight <span style={{fontSize:"14px"}}>( All )</span></h1>
                    </div>
                    <Table className="tablesorter  pb-5 mb-5" responsive>
                      <thead className="text-success">
                        <tr>
                          <th>Type Of Company</th>
                          <th>Entreprise Name  </th>
                          <th>Owner Name </th>
                          <th>Phone Number</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allClient.map((single)=>{
                       return(
                          <tr style={{backgroundColor:`${single.color}`, cursor:"pointer"}} >
                            <td> {single.typeOfCompany} </td>
                            <td > {single.entrepriseName} </td>
                            <td > {single.ownerFirstName} <span> {single.ownerLastName} </span> </td>
                            <td > {single.phoneNumber} </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="success" size="sm">Action</Button>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#3578E5" }}>
                                  <span  class="dropdown-item " style={{color:"white"}}>
                                    <EditClient   client={single}/>
                                  </span>
                                  <a class="dropdown-item "style={{color:"white" , fontSize:"18px"}} href="#">
                                  <DeleteModal style={{display:"none"}} flight={single} deleteFunction={DeleteClient}/>
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

export default AllClient;
