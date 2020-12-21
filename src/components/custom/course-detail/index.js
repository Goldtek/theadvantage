import React,{ Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Tolearn from '../tolearn';
import CourseInfo from '../course-info';
import Footer from '../footer';
import Header from '../header';
import CourseBanner from '../course-banner';
import { addItemToCart,removeItemFromCart } from '../../actions/cart';


const text = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nunc nec nisi rutrum, sed interdum metus mattis. Vestibulum id felis vulputate, elementum lorem vitae, suscipit eros. Suspendisse vitae pulvinar dolor. Etiam tellus purus, luctus at porttitor nec, bibendum elementum mauris. Aenean ipsum lectus, suscipit nec auctor et, tincidunt vitae justo. Duis gravida velit et dolor eleifend, at pretium nulla cursus. Fusce bibendum, dui in vehicula euismod, odio nulla euismod nulla, sodales volutpat elit libero non odio. Maecenas urna metus, pulvinar ultricies velit a, hendrerit aliquam urna.";


const CourseDetail = ({price, name,  level, duration, numOfVideo, numOfLessons,  videos, Image,id,quantity }) => {
    const dispatch = useDispatch();
    const history =   useHistory();

    const  add = cartItem => {
        try{
             dispatch(addItemToCart(cartItem));
             history.push('/cart')
        } catch(error){
            console.log(error);
        }

    }

    return (
        <Fragment>
            <Header/>
            <CourseBanner
                title={name}
                subTitle=""
            /> 
             <section id="courses-single" class="pt-90 pb-120 gray-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="courses-single-left mt-30">
                                <div class="title">
                                    <h3>Leadership: Practical Leadership Skills</h3>
                                </div> 
                                <div class="course-terms">
                                    <ul>
                                        <li>
                                            <div class="teacher-name">
                                                <div class="thum">
                                                    <img src="images/usr.jpg" alt="Teacher" />
                                                </div>
                                                <div class="name">
                                                    <span>Teacher</span>
                                                    <h6>Mark anthem</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="course-category">
                                                <span>Category</span>
                                                <h6>Personal Edge </h6>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                
                                <div class="courses-single-image pt-50">
                                    <img src="images/t1.jpg" alt="Courses" />
                                </div> 
                                
                                <div class="courses-tab mt-30">
                                    <ul class="nav nav-justified" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <Link class="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link id="curriculum-tab" data-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link id="instructor-tab" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</Link>
                                        </li>

                                    </ul>
                                    
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                            <div class="overview-description">
                                                <div class="single-description pt-40">
                                                    <h6>Course Summery</h6>
                                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                                </div>
                                                <div class="single-description pt-40">
                                                    <h6>Requrements</h6>
                                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                            <div class="curriculum-cont">
                                                <div class="title">
                                                    <h6>Learn basic javascript Lecture Started</h6>
                                                </div>
                                                <div class="accordion" id="accordionExample">
                                                    <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <Link to="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.1</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>

                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="card">
                                                        <div class="card-header" id="headingTow">
                                                            <Link to="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.2</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>

                                                        <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <Link to="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.3</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="card">
                                                        <div class="card-header" id="headingFore">
                                                            <Link to="#" data-toggle="collapse" class="collapsed" data-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.4</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                        <div id="collapseFore" class="collapse" aria-labelledby="headingFore" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <Link to="#" data-toggle="collapse" class="collapsed" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.5</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <Link to="#" data-toggle="collapse" class="collapsed" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.6</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="card">
                                                        <div class="card-header" id="headingSeven">
                                                            <Link to="#" data-toggle="collapse" class="collapsed" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                <ul>
                                                                    <li><i class="fa fa-file-o"></i></li>
                                                                    <li><span class="lecture">Lecture 1.7</span></li>
                                                                    <li><span class="head">What is javascript</span></li>
                                                                    <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                            <div class="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                            <div class="instructor-cont">
                                                <div class="instructor-author">
                                                    <div class="author-thum">
                                                        <img src="images/i-1.jpg" alt="Instructor" />
                                                    </div>
                                                    <div class="author-name">
                                                        <Link to="#"><h5>John Doe</h5></Link>
                                                        <span>Senior WordPress Developer</span>
                                                        <ul class="social">
                                                            <li><Link to="#"><i class="fa fa-facebook-f"></i></Link></li>
                                                            <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
                                                            <li><Link to="#"><i class="fa fa-google-plus"></i></Link></li>
                                                            <li><Link to="#"><i class="fa fa-instagram"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="instructor-description pt-25">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?</p>
                                                </div>
                                            </div> 
                                        </div>

                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <div class="course-features mt-30">
                                    <h4>Course Features </h4>
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
                                            <li><i class="fa fa-clone"></i>Leactures : <span>09</span></li>
                                            <li><i class="fa fa-beer"></i>Quizzes :  <span>05</span></li>
                                            <li><i class="fa fa-user-o"></i>Students :  <span>100</span></li>
                                        </ul>
                                        <div class="price-button pt-10">
                                            <span>Price : <b>$25</b></span>
                                            <Link to="#" class="main-btn">Enroll Now</Link>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-lg-12 col-md-6">
                                    <div class="You-makelike mt-30">
                                        <h4>You make like </h4> 
                                        <div class="single-makelike mt-20">
                                            <div class="image">
                                                <img src="images/y-1.jpg" alt="Image" />
                                            </div>
                                            <div class="cont">
                                                <Link to="#"><h4>Introduction to machine languages</h4></Link>
                                                <ul>
                                                    <li><Link to="#"><i class="fa fa-user"></i>31</Link></li>
                                                    <li>$50</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="single-makelike mt-20">
                                            <div class="image">
                                                <img src="images/y-1.jpg" alt="Image" />
                                            </div>
                                            <div class="cont">
                                                <Link to="#"><h4>How to build a basic game with java </h4></Link>
                                                <ul>
                                                    <li><Link to="#"><i class="fa fa-user"></i>31</Link></li>
                                                    <li>$50</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="single-makelike mt-20">
                                            <div class="image">
                                                <img src="images/y-1.jpg" alt="Image" />
                                            </div>
                                            <div class="cont">
                                                <Link to="#"><h4>Basic accounting from primary</h4></Link>
                                                <ul>
                                                    <li><Link to="#"><i class="fa fa-user"></i>31</Link></li>
                                                    <li>$50</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="related-courses pt-95">
                                <div class="title">
                                    <h3>Related Training</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="single-course mt-30">
                                            <div class="thum">
                                                <div class="image">
                                                    <img src="images/t3.jpg" alt="Course" />
                                                </div>
                                            </div>
                                            <div class="cont">
                                                <Link to="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></Link>
                                                <div class="course-teacher">
                                                    <div class="thum">
                                                        <Link to="#"><img src="images/usr.jpg" alt="teacher" /></Link>
                                                    </div>
                                                    <div class="name">
                                                        <Link to="#"><h6>Yemi Akinwuntan</h6></Link>
                                                    </div>
                                                    <div class="admin">
                                                        <ul>
                                                            <li><Link to="#"><i class="fa fa-user"></i><span>31</span></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-course mt-30">
                                            <div class="thum">
                                                <div class="image">
                                                    <img src="images/t2.jpg" alt="Course" />
                                                </div>
                                            </div>
                                            <div class="cont">
                                                <Link to="courses-single.html"><h4>New Manager Training in Essential Skills</h4></Link>
                                                <div class="course-teacher">
                                                    <div class="thum">
                                                        <Link to="#"><img src="images/usr.jpg" alt="teacher" /></Link>
                                                    </div>
                                                    <div class="name">
                                                        <Link to="#"><h6>Yemi Akinwuntan</h6></Link>
                                                    </div>
                                                    <div class="admin">
                                                        <ul>
                                                            <li><Link to="#"><i class="fa fa-user"></i><span>31</span></Link></li>
                                                        </ul>
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
            </section>

            <Footer/>
        </Fragment>    
    );

}

const mapStateToProps = ({ Course: {course:{ price, name,  level, duration, numOfVideo, numOfLessons,  videos, Image,id,quantity }}}) => ({
     price, name,  level, duration, numOfVideo, numOfLessons,  videos, Image,id,quantity
  });

const mapDispatchToProps = { addItemToCart,removeItemFromCart };

export default connect(mapStateToProps,mapDispatchToProps)(CourseDetail);