
import React, { useState ,useEffect} from 'react';
import {Table, Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
import Axios from 'axios'
const SelectClient = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);

    
  const [allClient , setallClient]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:5000/all-client')
    .then(res=>{
      if(res.data.length<1){
        let ex=[
          {ex:''},
          {ex:''},
          {ex:''}
        ]
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

    const toggle = () => setOpen(!open);
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Button size="sm" className="ml-4" onClick={toggle}>Copy Client ID</Button>
            </Form>
            <Modal  returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                  <div>
                    
                  <Table className="tablesorter  pb-5 mb-5" responsive>
                      <thead className="text-success">
                        <tr>
                          <th>Type Of Company</th>
                          <th>Entreprise Name  </th>
                          <th>ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allClient.map((single)=>{
                          return(
                              <tr style={{backgroundColor:`${single.color}`, cursor:"pointer"}} >
                                <td > {single.typeOfCompany} </td>
                                <td > {single.ownerFirstName} <span> {single.ownerlastName} </span> </td>
                                <td > {single._id} </td>
                              </tr> 
                            )
                        })}
                        <div className="p-5"></div>
                      </tbody>
                    </Table>
                  </div>
                </ModalBody>
                <ModalFooter className="d-flex">
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default SelectClient