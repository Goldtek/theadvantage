import  React,{ useState, useEffect, Fragment } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Header, Footer, CourseBanner, Pagination, Book } from '../../custom';
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
                <CourseBanner title="Books" image="images/ban2.jpg" />  
                <section id="shop-page" class="pt-120 pb-120 gray-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="shop-top-search">
                                    <div class="shop-bar">
                                        <ul class="nav" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <Link  class="active" id="shop-grid-tab" data-toggle="tab" href="#shop-grid" role="tab" aria-controls="shop-grid" aria-selected="true"><i class="fa fa-th-large"></i></Link >
                                            </li>
                                            <li class="nav-item">
                                                <Link  id="shop-list-tab" data-toggle="tab" href="#shop-list" role="tab" aria-controls="shop-list" aria-selected="false"><i class="fa fa-th-list"></i></Link >
                                            </li>
                                            <li class="nav-item">Showing 4 0f 24 Results</li>
                                        </ul>
                                    </div>
                                    <div class="shop-select">
                                        <select>
                                            <option value="1">Sort by</option>
                                            <option value="1">Sort by 01</option>
                                            <option value="2">Sort by 02</option>
                                            <option value="3">Sort by 03</option>
                                            <option value="4">Sort by 04</option>
                                            <option value="5">Sort by 05</option>
                                        </select>
                                    </div> 
                                </div>
                            </div>
                        </div> 

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="shop-grid" role="tabpanel" aria-labelledby="shop-grid-tab">
                                <div class="row justify-content-center">
                                <Book source="images/bk1.jpg" author="Yemi Akinwuntan" price={200} oldPrice={250} title="Purpose" quantity={1} id="ghlkflglty" />
                                <Book source="images/bk.jpg" author="Yemi Akinwuntan" price={150} oldPrice={250} title="Straight Business" quantity={1} id="3eoororo"/>
                                <Book source="images/p-3.jpg" author="Scott Trench" price={100} oldPrice={200} title="There were none" quantity={1} id="34tyu500o0"  />
                                <Book source="images/p-3.jpg" author="Scott Trench" price={200} oldPrice={250} title="The Stranded" quantity={1} id="52soe5dmgm6"  />
                                
                                </div> 
                            </div>
                            <div class="tab-pane fade" id="shop-list" role="tabpanel" aria-labelledby="shop-list-tab">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="single-publication mt-30">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="image">
                                                        <img src="images/p-3.jpg" alt="Publication" />
                                                        <div class="add-cart">
                                                            <ul>
                                                                <li><Link  href="#"><i class="fa fa-shopping-cart"></i></Link ></li>
                                                                <li><Link  href="#"><i class="fa fa-heart-o"></i></Link ></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="content pt-20">
                                                        <h5 class="book-title"><Link  href="#">Stones The Road </Link ></h5>
                                                        <p class="writer-name"><span>By</span> Scott Trench</p>
                                                        <div class="description">
                                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                        <div class="price-btn d-flex align-items-center justify-content-between">
                                                            <div class="price pt-20">
                                                                <span class="normal-price">$200</span>
                                                                <span class="discount-price">$250</span>
                                                            </div>
                                                            <div class="button pt-10">
                                                                <Link  href="#" class="main-btn"><i class="fa fa-cart-plus"></i> Buy Now</Link >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-publication mt-30">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="image">
                                                        <img src="images/p-3.jpg" alt="Publication" />
                                                        <div class="add-cart">
                                                            <ul>
                                                                <li><Link  href="#"><i class="fa fa-shopping-cart"></i></Link ></li>
                                                                <li><Link  href="#"><i class="fa fa-heart-o"></i></Link ></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="content pt-20">
                                                        <h5 class="book-title"><Link  href="#">The Stranded </Link ></h5>
                                                        <p class="writer-name"><span>By</span> Scott Trench</p>
                                                        <div class="description">
                                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                        <div class="price-btn d-flex align-items-center justify-content-between">
                                                            <div class="price pt-20">
                                                                <span class="discount-price">$250</span>
                                                                <span class="normal-price">$200</span>
                                                            </div>
                                                            <div class="button pt-10">
                                                                <Link  href="#" class="main-btn"><i class="fa fa-cart-plus"></i> Buy Now</Link >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-publication mt-30">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="image">
                                                        <img src="images/p-3.jpg" alt="Publication" />
                                                        <div class="add-cart">
                                                            <ul>
                                                                <li><Link  href="#"><i class="fa fa-shopping-cart"></i></Link ></li>
                                                                <li><Link  href="#"><i class="fa fa-heart-o"></i></Link ></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="content pt-20">
                                                        <h5 class="book-title"><Link  href="#">The Sicario </Link ></h5>
                                                        <p class="writer-name"><span>By</span> Scott Trench</p>
                                                        <div class="description">
                                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                        <div class="price-btn d-flex align-items-center justify-content-between">
                                                            <div class="price pt-20">
                                                                <span class="discount-price">$250</span>
                                                                <span class="normal-price">$200</span>
                                                            </div>
                                                            <div class="button pt-10">
                                                                <Link  href="#" class="main-btn"><i class="fa fa-cart-plus"></i> Buy Now</Link >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-publication mt-30">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="image">
                                                        <img src="images/p-3.jpg" alt="Publication" />
                                                        <div class="add-cart">
                                                            <ul>
                                                                <li><Link  href="#"><i class="fa fa-shopping-cart"></i></Link ></li>
                                                                <li><Link  href="#"><i class="fa fa-heart-o"></i></Link ></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="content pt-20">
                                                        <h5 class="book-title"><Link  href="#">There Were None </Link ></h5>
                                                        <p class="writer-name"><span>By</span> Scott Trench</p>
                                                        <div class="description">
                                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                        <div class="price-btn d-flex align-items-center justify-content-between">
                                                            <div class="price pt-20">
                                                                <span class="discount-price">$250</span>
                                                                <span class="normal-price">$200</span>
                                                            </div>
                                                            <div class="button pt-10">
                                                                <Link  href="#" class="main-btn"><i class="fa fa-cart-plus"></i> Buy Now</Link >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col-lg-12">
                                <nav class="courses-pagination mt-50">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <Link  href="#" aria-label="Previous">
                                                <i class="fa fa-angle-left"></i>
                                            </Link >
                                        </li>
                                        <li class="page-item"><Link  class="active" href="#">1</Link ></li>
                                        <li class="page-item"><Link  href="#">2</Link ></li>
                                        <li class="page-item"><Link  href="#">3</Link ></li>
                                        <li class="page-item">
                                            <Link  href="#" aria-label="Next">
                                                <i class="fa fa-angle-right"></i>
                                            </Link >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> 
                </section>
                        {/* <Pagination
                            PerPage={booksPerPage}
                            total={books.length}
                            paginate={paginate}
                        /> */}
                    
                <Footer/>
            </div>
        );
    }


export default Books;  