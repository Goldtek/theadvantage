import React from 'react';
import { Link } from "react-router-dom";

const Course = ({title, createdOn, numberOfLesson, userImg, bookImg,price,name })=>(
    <div className="col-lg-3 col-md-3 mb-30">
    <div className="single-courses-box without-box-shadow ">
            <div className="courses-image">
                <Link to="single-courses.html" className="d-block"><img src={bookImg} alt="image"/></Link>
            </div>

            <div className="courses-content">
                <div className="course-author d-flex align-items-center">
                    <img src={userImg} className="rounded-circle mr-2" alt="image"/>
                    <span>{name}</span>
                </div>

                <h3><Link to="single-courses.html" className="d-inline-block">{title}</Link></h3>

            </div>

            <div className="courses-box-footer">
                <ul>
                    <li className="students-number">
                        <i className="bx bx-date"></i> {createdOn}
                    </li>

                    <li className="courses-lesson">
                        <i className="bx bx-book-open"></i> {numberOfLesson} lessons
                    </li>

                    <li className="courses-price">
                    ${price}
                    </li>
                </ul>
            </div>
    </div>
</div>
);

export default Course;