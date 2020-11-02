import React from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './book.css';

const Book = ({ title, source,id,quantity}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const viewCourse = async (course) => {
        await dispatch({ type: 'LOAD_COURSE_DETAIL', course });
        history.push('/training-detail');
    }

    return (
        <div className="col-lg-3">
            <div className="h-100 mb-3">
                <span className='pyu' onClick={()=> viewCourse({price:500, name:title,  level:'Introductory', duration:8, numOfVideo:5, numOfLessons:13,  videos:10, Image: source,id,quantity })}>
                    <img className="card-img-top img-size" src={source} alt=""/>
                    </span>
                <div className="card-body title">
                    <span  onClick={()=> viewCourse({price:500, name:title,  level:'Introductory', duration:8, numOfVideo:5, numOfLessons:13,  videos:10, Image: source,id,quantity })}>{title}</span>
                </div>
            </div>
        </div>
    );
}

export default Book;