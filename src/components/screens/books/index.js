import  React,{ useState, useEffect, Fragment } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Header, Footer, Pagination } from '../../custom';
import { useDispatch } from 'react-redux';


function Books(){
    const [books,setBooks] = useState([{id:'dfrth78kkj', title: 'Purpose: why some live it others dont', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/pg.jpg',price:300}, 
    {id:'34rth78qj', title: 'Straight Business: for business managers & Leaders', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/pg1.jpg',price:100},
    {id:'34rrth8qj', title: 'Leadership: Practical Leadership Skills', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/ld.jpg',price:200}]);
    const [currPage, setCurrPage] = useState(1);
    const [booksPerPage] = useState(2);

    
  //GET CURRENT POST
  const indexOfLastEvent = currPage * booksPerPage;
  const indexOfFirstEvent = indexOfLastEvent - booksPerPage;
  const currBooks = books.slice(indexOfFirstEvent, indexOfLastEvent);
  //GET CURRENT POST

  //CHANGE PAGE
  const paginate = pageNumber => setCurrPage(pageNumber);
  //CHANGE PAGE

  const dispatch = useDispatch();
  const history = useHistory();

  const addbook = async (book) => {
      await dispatch({ type: 'LOAD_BOOK_DETAIL', book });
      history.push('/book-details');
  }

  
        return(
            <div>
                <Header/>
                   
                    <div className="sub">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 mr-auto mll">
                                    <h3>
                                        All Book Avaliable
                                    </h3>
                                    <p>
                                        we offer courses in a number of other areas. Our main focus is always on developing and creating value for you and your workplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="sec1 container-fluid my-5">
                        <div className="row">

                            <div className="col-lg-3">
                                <h5>Category</h5>
                                <p>
                                    <a href="#"><i className="fa fa-chevron-right mcol"></i> Business</a><br/>
                                    <a href="#"><i className="fa fa-chevron-right mcol"></i> Managemnet</a><br/>
                                    <a href="#"><i className="fa fa-chevron-right mcol"></i> Leadership</a><br/>
                                </p>
                            </div>
                            <div className="col-lg-9">

                            {currBooks.map((book,index)=>(
                                <Fragment>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <img className="img-fluid rounded mb-4" src={book.image} alt=""/>
                                        </div>
                                        <div className="col-lg-7">
                                            <span onClick={()=>addbook({title:book.title,image:book.image,description:book.description,author:book.author,price:book.price,id:book.id})}><h6>{book.title}</h6></span>
                                            <b>BY:</b> {book.author}
                                            <p>{book.description}</p>
                                            <p>
                                                <span>Hardcopy</span>
                                                <span>E-Book</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="uline"></div>
                                </Fragment>
                            ))}
                            </div>
                        </div>
                        <Pagination
                            PerPage={booksPerPage}
                            total={books.length}
                            paginate={paginate}
                        />
                    </div>
                <Footer/>
            </div>
        );
    }


export default Books;  