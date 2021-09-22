import React from "react";
import { ACTION_TYPES } from "./../helpers/constants";

function NavbarComponent({ state, dispatch }) {
  return (
    <nav className="navbar nav-bar-color ">
      <div className="container-fluid justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between">
        <div className="navbar-header">
          <a className="navbar-brand app-logo-div" href="#">
            My Friends List
          </a>
        </div>

        <nav className="navbar col-10 col-sm-4 col-md-3 col-lg-3 col-xl-3">
          <form className="form-inline nav navbar-nav col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 navbar-right">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={state.searchString}
              onChange={(e) => {
                dispatch({
                  type: ACTION_TYPES.SEARCH_FRIEND,
                  value: e.target.value,
                });
              }}
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </nav>
      </div>
    </nav>
  );
}

export default NavbarComponent;
