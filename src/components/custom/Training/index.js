import React from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch,connect } from 'react-redux';
import { addItemToCart } from '../../actions/cart';
import './style.css';

const Training = ({title, createdOn, numberOfLesson, userImg, bookImg,price,name,id,quantity, author, count })=> {
    const dispatch = useDispatch();
    const history = useHistory();

    
    return (
        <div class="col-lg-4 col-md-6">
            <div class="single-course mt-30">
                <div class="thum">
                    <div class="image">
                        <img src={bookImg} alt="Course" />
                    </div>

                </div>
                <div class="cont">

                    <Link href="training-single.html"><h4>{title} </h4></Link>
                    <div class="course-teacher">
                        <div class="thum">
                            <Link href="#"><img src={userImg} alt="teacher" /></Link>
                        </div>
                        <div class="name">
                            <Link href="#"><h6> {author} </h6></Link>
                        </div>
                        <div class="admin">
                            <ul>
                                <li><Link href="#"><i class="fa fa-user"></i><span>{count}</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
    }



const mapDispatchToProps = { addItemToCart };

export default connect(null,mapDispatchToProps)(Training);