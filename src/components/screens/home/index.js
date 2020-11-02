import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Banner, Footer, Book, ActualBook } from '../../custom';

export default class Home extends Component {
    state = { books: [{id:'dfrth78kkj', title: 'Purpose: why some live it others dont', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/pg.jpg',price:300}, 
    {id:'34rth78qj', title: 'Straight Business: for business managers & Leaders', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/pg1.jpg',price:100}]};
    
    render(){
        return(
            <div>
                <Header/>
                <Banner/> 
                <div className="sec container-fluid my-5">
                    <div className="row">                    
                        <h6 class="mt-5 ctxt"><Link to="/trainings">Personal Edge</Link>  <i class="fa fa-caret-right ml-2"></i></h6>  
                        <div className="dline"/>
                        <div className="row mt-5">
                            <Book source="images/courses/11.jpg" title="Leadership: Practical Leadership Skills" id={1} quantity={1}/>
                            <Book source="images/courses/9.jpg" title="Straight Business: for business managers & Leaders"  id={2} quantity={1}/>
                            <Book source="images/courses/10.jpg" title="The Complete Communication Skills Master className for Life"  id={3} quantity={1}/>
                            <Book source="images/courses/7.jpg" title="The Complete Management Skills Certification Course"  id={4} quantity={1}/>
                        </div>

                        <h6 class="mt-5 ctxt"><Link to="/trainings">Business Edge</Link>  <i class="fa fa-caret-right ml-2"></i></h6>  
                        <div className="dline"/>
                        <div className="row mt-5">
                            <Book source="images/courses/11.jpg" title="Leadership: Practical Leadership Skills" id={1} quantity={1}/>
                            <Book source="images/courses/9.jpg" title="Straight Business: for business managers & Leaders"  id={2} quantity={1}/>
                            <Book source="images/courses/10.jpg" title="The Complete Communication Skills Master className for Life"  id={3} quantity={1}/>
                            <Book source="images/courses/7.jpg" title="The Complete Management Skills Certification Course"  id={4} quantity={1}/>
                        </div>
                    
                 
                        <h5>Books</h5>  
                        <div className="dline"/>
                        <div className="row mt-5">
                            {this.state.books.map((book) =>  <ActualBook book={book} />)}
                            <div className="col-lg-4 mr-20"> </div>
                        </div>

                        <div class="dline" style={{borderBottom: '0px'}}></div>
                        <h5>Coaching</h5>  
                        <div class="dline"></div>
                        <div class="row mt-5">  
                            <div className="col-lg-4 mr-20">
                                <Link to="/vantage">
                                    <div className="h-100 mb-3">
                                        <span className='pyu'>
                                            <img className="card-img-top" src="images/discovery.jpg" alt=""/>
                                            </span>
                                        <div className="card-body title">
                                            <span>Discovery Package</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 mr-20">
                                <Link to="/vantage">
                                    <div className="h-100 mb-3">
                                        <span className='pyu'>
                                            <img className="card-img-top" src="images/vantage.png" alt=""/>
                                            </span>
                                        <div className="card-body title">
                                            <span>Vantage Package</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>  
                            <div className="col-lg-4 mr-20">
                                <Link to="/executive">
                                    <div className="h-100 mb-3">
                                        <span className='pyu'>
                                            <img className="card-img-top" src="images/executive.jpg" alt=""/>
                                            </span>
                                        <div className="card-body title">
                                            <span>Executive Package</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>                 
                        </div>

                            {/* <div className="row mt-5">
                            <ActualBook source="images/discovery.jpg" title="Discovery Package" id={1} quantity={1}/>
                            <ActualBook source="images/vantage.png" title="Vantage Package"  id={2} quantity={1}/>
                            <div className="col-lg-4 mr-20"> </div>
                            <div className="col-lg-4 mr-20"></div>
                        </div> */}




                        <h5 class="mt-5">Events</h5>  
                        <div class="dline"></div>

                        <div class="row mt-5">  
                            <div class="col-lg-4">
                                <div class="card p-4 eBg">
                                    <Link to="/event-detail"><h5 class="px17">Resetting organisations second session </h5></Link>
                                    <div><b class="px12">19 AUGUST</b> <small class="colp">12:00 PM - 5 :00 PM</small></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt beatae obcaecati, quasi distinctio eum?
                                    </p>
                                </div>
                            </div>  
                            <div class="col-lg-4">
                                <div class="card p-4 eBg">
                                    <a href="event-details.html"><h5 class="px17">The leadership event for business development</h5></a>
                                    <div><b class="px12">19 AUGUST</b> <small class="colp">12:00 PM - 5 :00 PM</small></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt beatae obcaecati, quasi distinctio eum?
                                    </p>     
                                </div>  
                            </div>  
                            <div class="col-lg-4">
                                <div class="card p-4 eBg">
                                    <a href="event-details.html"><h5 class="px17">Competing on commercial capabilities</h5></a>
                                    <div><b class="px12">19 AUGUST</b> <small class="colp">12:00 PM - 5 :00 PM</small></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt beatae obcaecati, quasi distinctio eum?
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}