import React, { Fragment } from "react";

const Pagination = ({ PerPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / PerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Fragment>
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
        <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        {pageNumbers.map(number => (
            <li className="page-item">
                <a 
                className="page-link"
                href="#"
                style={{ cursor: "pointer" }}
                onClick={() => paginate(number)}
                >
                {number}
                </a>
            </li>

        ))} 
        
        </ul>
        </nav>
    </Fragment>
  );
};

export default Pagination;


