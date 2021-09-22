import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { ACTION_TYPES, Friend } from "./../helpers/constants";
function AddFriendComponent({ dispatch }) {
  const [inputValue, setInputValue] = useState("");
  const [hasError, seterror] = useState(false);

  const handleSubmit = () => {
    if (inputValue === "") {
      seterror(true);
    } else {
      const newFriend = new Friend(inputValue);
      dispatch({ type: ACTION_TYPES.ADD_FRIEND, value: newFriend });
      setInputValue("");
    }
  };
  return (
    <>
      <div className="d-flex col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 input-spacing">
        <FloatingLabel
          controlId="floatingInput"
          label="Add a friend"
          className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 "
        >
          <Form.Control
            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            type="input"
            placeholder="Add a friend"
            value={inputValue}
            onChange={(e) => {
              seterror(false);
              setInputValue(e.target.value);
            }}
          />
          {hasError ? <p> Please fill the Name to add a friend </p> : ""}
        </FloatingLabel>
        <Button
          className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 add-button-spacing "
          onClick={() => handleSubmit()}
        >
          Add
        </Button>
      </div>
    </>
  );
}

export default AddFriendComponent;
