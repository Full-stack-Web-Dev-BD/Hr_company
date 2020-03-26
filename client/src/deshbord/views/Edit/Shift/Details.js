import Axios from 'axios'
import React, { useState, useEffect } from 'react';
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Details = (props) => {
  const [singleEmployee , setsingleEmployee]=useState({shiftHistory:[]})
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(()=>{
    Axios.get(`http://localhost:5000/single-employee/${props.shift.employeeID}`)
    .then(res=>{
      console.log(res)
      setsingleEmployee(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <p onClick={toggle}> 
        Details
      </p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h3 className=" text-success">Details about this Shift</h3>
        </ModalHeader>
        <ModalBody>
            <p className="text-light">Employee ID : {props.shift.employeeID} </p>
            <p className="text-light">Company ID : {props.shift.companyID} </p>
            <p className="text-light">Date : {props.shift.date} </p>
            <p className="text-light">Start Time : {props.shift.startTime} </p>
            <p className="text-light">End Time : {props.shift.endTime} </p>

          <h3 className="text-success">Details about this Employee Shift</h3>
            <p  className="text-light">Employee Name : <span> {singleEmployee.firstName} </span><span>{singleEmployee.lastName}</span></p>
            <p  className="text-light">Address : {singleEmployee.address} </p>
            <p  className="text-light">Join Date : {singleEmployee.joinDate} </p>
            <p  className="text-light">Phone Number : {singleEmployee.phoneNumber} </p>
            <p  className="text-light">Email : {singleEmployee.email} </p>
            <p  className="text-light">Hourly Rate : {singleEmployee.hourlyRate} </p>

          <h3 className="text-success">All Shift of this Employee Shift</h3>
          <div>
            
          <Table className="tablesorter  pb-5 mb-5" responsive>
                      <thead className="text-success">
                        <tr>
                          <th>Company ID</th>
                          <th>Date  </th>
                          <th>Start Time </th>
                          <th>End Time </th>
                        </tr>
                      </thead>
                      <tbody>
                        {singleEmployee.shiftHistory.map((single)=>{
                       return(
                          <tr style={{backgroundColor:`${single.color}`, cursor:"pointer"}} >
                            <td >{single.companyID} </td>
                            <td > {single.date} </td>
                            <td > {single.startTime} </td>
                            <td > {single.endTime} </td>
                          </tr> 
                       )
                        })}
                        <div className="p-5"></div>
                      </tbody>
                  </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Details;