import React from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch,connect } from 'react-redux';
import { addItemToCart } from '../../actions/cart';
import './style.css';

const Course = ({title, createdOn, numberOfLesson, userImg, bookImg,price,name,id,quantity })=> {
    const dispatch = useDispatch();
    const history = useHistory();

    const viewCourse = async (course) => {
        await dispatch({ type: 'LOAD_COURSE_DETAIL', course });
        history.push('/training-detail');
    }
    
    return (
        <div className="col-lg-3 col-md-3 mb-30">
            <div className="single-courses-box without-box-shadow ">
                <div className="courses-image">
                    <span onClick={()=> viewCourse({price, name:title, Image: bookImg, id,numOfLessons:numberOfLesson, level:'Introductory', duration:8, numOfVideo:5,quantity })}  className="d-block"><img src={bookImg} alt="image"/></span>
                </div>

                <div className="courses-content">
                    <div className="course-author d-flex align-items-center">
                        <img src={userImg} className="rounded-circle mr-2" alt="image"/>
                        <span>{name}</span>
                    </div>

                    <h3><span onClick={()=> viewCourse({price, name:title, Image: bookImg, id,numOfLessons:numberOfLesson, level:'Introductory', duration:8, numOfVideo:5,quantity })} className="d-inline-block">{title}</span></h3>

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
    }



const mapDispatchToProps = { addItemToCart };

export default connect(null,mapDispatchToProps)(Course);