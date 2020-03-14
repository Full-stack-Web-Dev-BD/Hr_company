
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const deleteDone=()=>{
    props.deleteFunction(props.flight._id)
  
  }
  return (
    <div>
      <p onClick={toggle}> 
        Delete
      </p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h2 className="text-success">
          Delete Flight
          </h2>
        </ModalHeader>
        <ModalBody>
          <h5 className="text-dark">
          Are You Sure To Delete This  Flight ?
          </h5>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={deleteDone}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteModal;