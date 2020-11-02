import React from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './book.css';

const ActualBook = ({book}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const viewCourse = async (book) => {
        await dispatch({ type: 'LOAD_BOOK_DETAIL', book });
        history.push('/book-details');
    }

    return (
        <div className="col-lg-4 mr-20">
            <div className="h-100 mb-3">
                <span className='pyu' onClick={()=> viewCourse({title:book.title,image:book.image,description:book.description,author:book.author,price:book.price,id:book.id})}>
                    <img className="card-img-top" src={book.image} alt=""/> {console.log('src-->',book)}
                    </span>
                <div className="card-body title">
                    <span  onClick={()=> viewCourse({title:book.title,image:book.image,description:book.description,author:book.author,price:book.price,id:book.id})}>{book.title}</span>
                </div>
            </div>
        </div>
    );
}

export default ActualBook;