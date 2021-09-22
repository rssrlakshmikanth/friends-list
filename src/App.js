import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import FriendsList from "./components/FriendsList";
import Pagination from "./components/Pagination";
import AddFriendComponent from "./components/AddFriendComponent";
import { reducer, intialState } from "./reducer/rootReducer";
import NavbarComponent from "./components/NavbarComponent";
import ConfirmationModal from "./components/ConfirmationModal";

import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <NavbarComponent state={state} dispatch={dispatch} />
      <Container
        fluid="xxl"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <AddFriendComponent dispatch={dispatch} />
        <FriendsList state={state} dispatch={dispatch} />
      </Container>
      <Pagination state={state} dispatch={dispatch} />
      <ConfirmationModal  state={state} dispatch={dispatch} />
    </>
  );
};

export default App;
