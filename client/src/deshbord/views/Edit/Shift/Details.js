
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Details = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const deleteDone=()=>{
    props.deleteFunction(props.flight._id)
    toggle()
    window.location.href='/admin/all-shift'
  
  }
  return (
    <div>
      <p onClick={toggle}> 
        Details
      </p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h2 className="text-success">
          Delete Shift
          </h2>
        </ModalHeader>
        <ModalBody>
          <h5 className="text-light">Details about this Employee Shift</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Details;