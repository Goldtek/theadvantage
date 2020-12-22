import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Banner, Footer, Training, Book } from '../../custom';
import './home.css';

export default class Home extends Component {
    state = { books: [{id:'dfrth78kkj', title: 'Purpose: why some live it others dont', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/pg.jpg',price:300}, 
    {id:'34rth78qj', title: 'Straight Business: for business managers & Leaders', author: 'Yemi Akinwuntan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  blanditiis ex fugiat.', image: 'images/books/pg1.jpg',price:100}]};
    
    render(){
        return(
            <div>
            <Header />
            <Banner />
    
            <section id="apply-aprt" className="pb-120 mt-110">
            <div className="container">
    
                <div className="row pb-65">
                <div className="col-lg-6">
                    <div className="section-title pb-45">
                    <h2>Coaching Packages</h2>
                    <div className="bline" />
                    <p>Enroll in any of our coaching packages that best describes you.</p>
                    </div>
                </div>
                </div>
    
                <div className="apply">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                    <div className="apply-cont apply-color-3">
                        <h3>Discovery</h3>
                        <div className="dline" />
                        <p>
                                    This is tailored made exclusively for those seeking to discover, define and deploy their purpose. Knowledge, activities and tasks in the Discovery Package will jumpstart your journey to discovery, confidence and beginning steps to fulfilment.
                                                </p>
                        <Link to="/discovery" class="main-btn-3">Select</Link>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="apply-cont apply-color-3">
                        <h3>Vantage</h3>
                        <div className="dline" />
                        <p>For those who may have had some degree of certainty in their discovery of purpose will quickly embrace the Vantage Package. This package helps to achieve better clarity in the deployment of purpose</p>
                        <Link to="/vantage" class="main-btn-3">Select</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <section id="course-part" className="pt-115 pb-120 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title pb-45">
                            <h2>Personal Edge Trainings </h2>
                            <div className="bline" />
                        </div>
                    </div>
                </div>
                <div className="row course-slide mt-30"> 
              
                    <Training bookImg="images/t1.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="Leadership: Practical Leadership Skills" count={31} quantity={1} numberOfLesson="20" price={25} id="asjwetrn" numOfVideo="50" quizz="10" students="20" />
                    
                    <Training bookImg="images/t2.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="Learn Basic Javascript" count={0} quantity={1} numberOfLesson="10" price={19} id="bdhyotrn" numOfVideo="20" quizz="5" students="2"/>
                    
                    <Training bookImg="images/t3.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="New Managerial Skills" count={23} quantity={1} numberOfLesson="40" price={20} id="aghetrn" numOfVideo="30" quizz="15" students="14"/>

                    <Training bookImg="images/t4.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="Discovery your purpose" count={10} quantity={1} numberOfLesson="15" price={25} id="anahwetrn" numOfVideo="45" quizz="12" students="34"/>
                    
               </div>
            </div>
            </section>
    
            <section id="teachers-part" className="pt-70 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-lg-5">
                    <div className="section-title mt-50">
                    <h2>Meet Our Instructors</h2>
                    <div className="bline" />
                    </div>
                    <div className="teachers-cont">
                    <p>
                        For our Business Edge Trainings and Coaching, we have carefully selected personal and business trainers, coaches and Instructors with high success rates in what they do. Register here to become a premium trainer or coach.
                                        </p>
                    <Link to="/signup" class="main-btn mt-55">Become An Instructor</Link>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="teachers mt-20">
                    <div className="row">
                        <div className="col-sm-6">
                                    <div className="single-teachers mt-30 text-center">
                                        <div className="image">
                                            <img src="images/m1.jpg" alt="Teachers" />
                                        </div>
                                        <div className="cont">
                                            <Link to="teachers-single.html"><h6>Yemi Akinwuntan</h6></Link>
                                            <span>Coach</span>
                                        </div>
                                    </div>
                                </div>
                        <div className="col-sm-6">
                                    <div className="single-teachers mt-30 text-center">
                                        <div className="image">
                                            <img src="images/m2.jpg" alt="Teachers" />
                                        </div>
                                        <div className="cont">
                                            <Link to="teachers-single.html"><h6>David card</h6></Link>
                                            <span>Pro Chancellor</span>
                                        </div>
                                    </div>
                                </div>
    
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <section id="publication-part" className="pt-115 pb-120 gray-bg">
            <div className="container">
                <div className="row align-items-end">
                <div className="col-lg-6 col-md-8 col-sm-7">
                    <div className="section-title pb-60">
                    <h2>From Store </h2>
                    <div className="bline" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-5">
                    <div className="products-btn text-right pb-60">
                    <Link to="/books" class="main-btn">All Products</Link>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                <Book source="images/bk1.jpg" author="Yemi Akinwuntan" price={200} oldPrice={250} title="Purpose" quantity={1} id="ghlkflglty" />
                <Book source="images/bk.jpg" author="Yemi Akinwuntan" price={150} oldPrice={250} title="Straight Business" quantity={1} id="3eoororo"/>
                <Book source="images/p-3.jpg" author="Scott Trench" price={100} oldPrice={200} title="There were none" quantity={1} id="34tyu500o0"  />
                <Book source="images/p-3.jpg" author="Scott Trench" price={200} oldPrice={250} title="The Stranded" quantity={1} id="52soe5dmgm6"  />
                                
               </div>
            </div>
            </section>
    
            <section id="testimonial" className="bg_cover pt-115 pb-115 bg" data-overlay="8" >
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-40">
                    <h2>Testimonial</h2>
                    <div className="bline1" />
                    </div>
                </div>
                </div>
                <div className="row testimonial-slide mt-40">
                <div className="col-lg-6">
                    <div className="single-testimonial">
                    <div className="testimonial-thum">
                        <img src="images/ch.jpg" alt="Testimonial" />
                        <div className="quote">
                                    <i className="fa fa-quote-right" />
                                </div>
                    </div>
                    <div className="testimonial-cont">
                        <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-testimonial">
                    <div className="testimonial-thum">
                        <img src="images/ch1.jpg" alt="Testimonial" />
                        <div className="quote">
                                    <i className="fa fa-quote-right" />
                                </div>
                    </div>
                    <div className="testimonial-cont">
                        <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-testimonial">
                    <div className="testimonial-thum">
                        <img src="images/ch.jpg" alt="Testimonial" />
                        <div className="quote">
                                    <i className="fa fa-quote-right" />
                                </div>
                    </div>
                    <div className="testimonial-cont">
                        <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
    
            <Footer />
        </div>
        );
    }
}