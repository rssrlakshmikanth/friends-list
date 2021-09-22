import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ACTION_TYPES } from "./../helpers/constants";

function ConfirmationModal({ state, dispatch }) {
  const onDelete = () => {
    onHide();
    dispatch({
      type: ACTION_TYPES.REMOVE_FREIND,
      value: state.seletedFriend[0],
    });
  };
  const onHide = () => {
    dispatch({ type: ACTION_TYPES.CLOSE_DELETE_MODAL });
  };

  return (
    <Modal
      show={state.showModal}
      onHide={() => onHide()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete from{" "}
          <b>{state?.seletedFriend[0]?.name }</b> {" "}
          your friends List???
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onHide()}>Close</Button>
        <Button variant="btn btn-danger" onClick={() => onDelete()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
