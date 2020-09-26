import React from 'react';
import { Link } from "react-router-dom";

const Course = ({title, createdOn, numberOfLesson, userImg, bookImg,price,name })=>(
    <div class="col-lg-3 col-md-3 mb-30">
    <div class="single-courses-box without-box-shadow ">
            <div class="courses-image">
                <Link to="single-courses.html" class="d-block"><img src={bookImg} alt="image"/></Link>
            </div>

            <div class="courses-content">
                <div class="course-author d-flex align-items-center">
                    <img src={userImg} class="rounded-circle mr-2" alt="image"/>
                    <span>{name}</span>
                </div>

                <h3><Link to="single-courses.html" class="d-inline-block">{title}</Link></h3>

            </div>

            <div class="courses-box-footer">
                <ul>
                    <li class="students-number">
                        <i class="bx bx-date"></i> {createdOn}
                    </li>

                    <li class="courses-lesson">
                        <i class="bx bx-book-open"></i> {numberOfLesson} lessons
                    </li>

                    <li class="courses-price">
                    ${price}
                    </li>
                </ul>
            </div>
    </div>
</div>
);

export default Course;