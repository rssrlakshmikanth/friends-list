import React, { useState } from "react";
import FriendComponent from "./FriendComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlusCircle, faSearchMinus } from "@fortawesome/free-solid-svg-icons";

function FriendsList({ state, dispatch }) {
  let indexOfLastPost = state.currentPage * state.itemsPerPage;
  let indexOfFirstPost = indexOfLastPost - state.itemsPerPage;
  let currentPosts = state.displayList.slice(indexOfFirstPost, indexOfLastPost);
  useState(() => {
    indexOfLastPost = state.currentPage * state.itemsPerPage;
    indexOfFirstPost = indexOfLastPost - state.itemsPerPage;
    currentPosts = state.displayList.slice(indexOfFirstPost, indexOfLastPost);
  }, [state.displayList, state.currentPage, state.itemsPerPage]);

  if (currentPosts.length === 0 && state.searchString === "") {
    return <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center greyed-out-div" > <FontAwesomeIcon icon={faPlusCircle}  className="empty-icon-spacing" />Please Add some Friends</div>;
  } else if (currentPosts.length === 0 && state.searchString !== "") {
    return <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center greyed-out-div" > <FontAwesomeIcon icon={faSearchMinus} className="empty-icon-spacing" />Searched Friends not Found</div>;
  } else {
    return (
      <ul className="list-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-column justify-content-center align-items-center">
        {currentPosts.map((item) => (
          <FriendComponent dispatch={dispatch} key={item.id} data={item} />
        ))}
      </ul>
    );
  }
}

export default FriendsList;
