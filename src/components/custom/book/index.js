import React from 'react';
import { Link } from 'react-router-dom';
import './book.css';

const Book = ({ title, source}) => (
    <div class="col-lg-3">
        <div class="h-100 mb-3">
            <Link href="#">
                <img class="card-img-top img-size" src={source} alt=""/>
                </Link>
            <div class="card-body">
                <Link href="#">{title}</Link>
            </div>
        </div>
    </div>
);

export default Book;