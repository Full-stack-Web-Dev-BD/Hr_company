
import React, { useState ,useEffect} from 'react';
import {Table, Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
const ClientDetails = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const Client= props.client


    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <p style={{fontSize:"18px" , color:"white", cursor:"pointer" ,width: "100%",fontSize: "18px" , padding:"15px" , margin:"-15px"}} onClick={toggle}>Details</p>
            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    <h2 className="text-success text-center" >Details : </h2>
                    <div>
                      <p className="text-light"><span className="text-info">Type of company : </span>{Client.typeOfCompany} </p>
                      <p className="text-light"><span className="text-info">Entreprise Name : </span>{Client.entrepriseName} </p>
                      <p className="text-light"><span className="text-info">Owner Name : </span> <span> {Client.ownerFirstName} </span> {Client.ownerlastName}  </p>
                      <p className="text-light"><span className="text-info">Expertise : </span> {Client.expertise} </p>
                      <p className="text-light"><span className="text-info">Phone Number : </span> {Client.phoneNumber} </p>
                      <p className="text-light"><span className="text-info">Company Address : </span>{Client.companyAddress} </p>
                      
                      <h6 style={{textDecoration:'underline'}}>Added Note :-</h6>
                      {Client.note.length>0?
                      Client.note.map(note=>{
                        return(
                        <p style={{color:"white"}}>{note}</p>
                        )
                      }):<p style={{color:"white"}}>Empty List !</p>
                      }
                    </div>
                    <h3 className="text-success">Shift Details : </h3>
                    
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
                        {Client.shiftHistory.map((single)=>{
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
                </ModalBody>
                <ModalFooter className="d-flex">
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default ClientDetails