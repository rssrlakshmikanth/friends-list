import React, { useState, useEffect } from "react";
import { ACTION_TYPES } from "./../helpers/constants";

const Pagination = ({ state, dispatch }) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(state.displayList.length / state.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length === 1) {
    return null;
  }

  return (
    <nav className=" pagination-spacing fixed-bottom col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 flex-fill d-flex justify-content-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              state.currentPage === number ? "page-item active" : "page-item"
            }
          >
            <a
              onClick={() =>
                dispatch({
                  type: ACTION_TYPES.CHANGE_PAGE_NUMBER,
                  value: number,
                })
              }
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
