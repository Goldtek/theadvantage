import React from 'react';
import { Link } from 'react-router-dom';
import './book.css';

const Book = ({ title, source}) => (
    <div className="col-lg-3">
        <div className="h-100 mb-3">
            <Link href="#">
                <img className="card-img-top img-size" src={source} alt=""/>
                </Link>
            <div className="card-body">
                <Link href="#">{title}</Link>
            </div>
        </div>
    </div>
);

export default Book;