import React from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch,connect } from 'react-redux';
import { addItemToCart } from '../../actions/cart';
import './style.css';

const Training = ({title, createdOn, numberOfLesson, userImg, bookImg,price,author,id,quantity, count, numOfVideo, quizz, students, summary, requirements})=> {
    const dispatch = useDispatch();
    const history = useHistory();

    const viewCourse = async (e, course) => {
        e.preventDefault();
        dispatch ({ type: 'LOAD_COURSE_DETAIL', course});
        history.push('/training-detail');
    }

    
    return (
        <div class="col-lg-4 col-md-6">
            <span style={{ cursor: 'pointer' }} onClick={(e)=> viewCourse(e,{price, name:title, Image: bookImg, id,numOfLessons:numberOfLesson, category:'Personal Edge', duration:8, numOfVideo,quantity , quizz, students, author, userImg})}>
                <div class="single-course mt-30">
                    <div class="thum">
                        <div class="image">
                            <img src={bookImg} alt="Course" />
                        </div>

                    </div>
                    <div class="cont">

                        <span onClick={(e)=> viewCourse(e,{price, name:title, Image: bookImg, id,numOfLessons:numberOfLesson, category:'Personal Edge', duration:8, numOfVideo,quantity , quizz, students, author, userImg})}><h4>{title} </h4></span>
                        <div class="course-teacher">
                            <div class="thum">
                                <Link href="#"><img src={userImg} alt="teacher" /></Link>
                            </div>
                            <div class="name">
                                <Link href="#"><h6> {author} </h6></Link>
                            </div>
                            <div class="admin">
                                <ul>
                                    <li><Link ><i class="fa fa-user"></i><span>{count}</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </span>
        </div>
    );
    }



const mapDispatchToProps = { addItemToCart };

export default connect(null,mapDispatchToProps)(Training);