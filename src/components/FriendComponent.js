import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ACTION_TYPES } from "./../helpers/constants";

function FriendComponent({ data, dispatch }) {
  return (
    <Card
      body
      className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 card-spacing"
    >
      <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between align-items-center">
        <div className="d-flex justify-content-center flex-column col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 friend-card-left-section">
          <div className="d-flex justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start   friend-card-name-section h5">{data.name}</div>
          <div className="d-flex justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start   friend-card-desc-section ">
            {data.isFavorite ? "This is a Best friend!!!" : "This is a friend"}
          </div>
        </div>
        <div className=" col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 friend-card-right-section justify-content-end">
          <Button
            variant={data.isFavorite ? "btn btn-success" : "outline-success"}
            className=" col-6 col-sm-6 col-md-6 col-lg-6"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: ACTION_TYPES.TOGGLE_BEST_FRIEND,
                value: data,
              });
              console.log("clicked");
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button
            variant="outline-danger"
            className=" col-6 col-sm-6 col-md-6 col-lg-6"
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.OPEN_DELETE_MODAL,
                value: data,
              });
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default FriendComponent;
