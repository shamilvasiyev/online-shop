import React from "react";
import "./Pagination.scss";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination_container">
      <p>Showing 1-10 of {totalProducts} products</p>

      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination_button">
            <button
              className={number === currentPage ? "activePage" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
