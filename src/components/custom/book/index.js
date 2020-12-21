import React from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './book.css';

const Book = ({ title, source,id,quantity, author, oldPrice, price}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const viewCourse = async (course) => {
        await dispatch({ type: 'LOAD_COURSE_DETAIL', course });
        history.push('/training-detail');
    }

    return (
        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="single-publication mt-30 text-center">
                                <div class="image">
                                    <img src={source} alt="Publication" />
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="content pt-20">
                                    <h5 class="book-title"><a href="#">{title} </a></h5>
                                    <p class="writer-name"><span>By</span> {author} </p>
                                    <div class="price-btn d-flex align-items-center justify-content-between">
                                        <div class="price pt-20">
                                            <span class="discount-price">${oldPrice}</span>
                                            <span class="normal-price">${price}</span>
                                        </div>
                                        <div class="button pt-10">
                                            <Link to="#" class="main-btn"><i class="fa fa-cart-plus"></i> Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
    );
}

export default Book;