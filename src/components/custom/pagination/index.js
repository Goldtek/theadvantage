import React, { Fragment } from "react";
import {Link } from 'react-router-dom';

const Pagination = ({ PerPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / PerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Fragment>
        <nav class="courses-pagination mt-50">
        <ul className="pagination justify-content-center">
        <li class="page-item">
            <Link  to="#" aria-label="Previous">
                <i class="fa fa-angle-left"></i>
            </Link >
        </li>
        {pageNumbers.map(number => (
            <li className="page-item">
                <Link   
                to="#"
                style={{ cursor: "pointer" }}
                onClick={() => paginate(number)}
                >
                {number}
                </Link>
            </li>
        ))} 
        <li class="page-item">
          <Link  to="#" aria-label="Next">
              <i class="fa fa-angle-right"></i>
          </Link>
        </li>
        
        </ul>
        </nav>
    </Fragment>
  );
};


export default Pagination;


