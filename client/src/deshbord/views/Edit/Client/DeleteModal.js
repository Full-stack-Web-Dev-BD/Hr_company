
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
    toggle()
    window.location.href='/admin/all-client'
  
  }
  return (
    <div>
      <p onClick={toggle}> 
        Delete
      </p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h2 className="text-success">
          Delete Client
          </h2>
        </ModalHeader>
        <ModalBody>
          <h5 className="text-dark">
          Are You Sure To Delete This  Client ?
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