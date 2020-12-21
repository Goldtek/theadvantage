import  React,{ useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, DashboardBanner, Footer, Book } from '../../custom';
import './style.css';

function Dashboard(){

    useEffect(()=>{

    },[]);

        
    return(
        <Fragment>
            <Header/>
            <section class="gray-bg">
              <div class="pt-105 pb-120">
                  <div class="container">
                      <div class="col-md-12 mx-auto">
                          <h4>Continue Trainings</h4>
                          <div class="line1"></div>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <Link to="training-single.html"><h6 class="card-title">Leadership: Practical Leadership Skills</h6></Link>
                                        
                                        <p>
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </p>
                                        </div>
                                        <img class="card-img-bottom" src="images/t1.jpg" alt="Card image cap" />
                                    </div>
                                </div>


                                <div class="col-lg-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <Link to="training-single.html"><h6 class="card-title">Leadership: Practical Leadership Skills</h6></Link>
                                        <p>
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </p>
                                        </div>
                                        <img class="card-img-bottom" src="images/t2.jpg" alt="Card image cap" />
                                    </div>
                                </div>                            
                            </div>

                      </div>
                      
                  </div>
              </div>


              <div class="pt-50">
                  <div class="container">
                  <h4>Coaching Packages</h4>

                      <div class="line1"></div>     

                        <div class="row no-gutters">
                            <div class="col-lg-6">
                                <div class="apply-cont apply-color-3 p-4 m-0 mr-2">
                                    <h4>Discovery Package</h4>
                                    <div class="dline my-3"></div>
                                    <p>
                                        This is tailored made exclusively for those seeking to discover, define and deploy their purpose. Knowledge, activities and tasks in the Discovery Package will jumpstart your journey to discovery, confidence and beginning steps to fulfilment. 
                                    </p>
                                    <Link to="/discovery" class="main-btn-3">Select</Link>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="apply-cont apply-color-3 p-4 m-0 ml-2">
                                    <h4>Vantage Package</h4>
                                    <div class="dline my-3"></div>
                                    <p>For those who may have had some degree of certainty in their discovery of purpose will quickly embrace the Vantage Package. This package helps to achieve better clarity in the deployment of purpose</p>
                                    <Link to="/vantage" class="main-btn-3">Select</Link>
                                </div> 
                            </div> 
                          </div>

                  </div>
              </div>



              <div class="container pb-90">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="related-courses pt-95">
                              <div class="title">
                                  <h4>More trainings</h4>
                              </div>
                              <div class="row">


                                  <div class="col-md-3">
                                      <div class="single-course mt-30">
                                          <div class="thum">
                                              <div class="image">
                                                  <img src="images/t3.jpg" alt="Course" />
                                              </div>
                                          </div>
                                          <div class="cont">
                                              <Link to="courses-single.html"><h6>Learn basic javascript from start for beginner</h6></Link>
                                              <div class="course-teacher">
                                                  <div class="thum">
                                                      <Link to="#"><img src="images/usr.jpg" alt="teacher"/></Link>
                                                  </div>
                                                  <div class="name">
                                                      <Link to="#"><h6 class="x10">Yemi Akinwuntan</h6></Link>
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


                                  <div class="col-md-3">
                                      <div class="single-course mt-30">
                                          <div class="thum">
                                              <div class="image">
                                                  <img src="images/t2.jpg" alt="Course"/>
                                              </div>
                                          </div>
                                          <div class="cont">
                                              <Link to="courses-single.html"><h6>New Manager Training in Essential Skills</h6></Link>
                                              <div class="course-teacher">
                                                  <div class="thum">
                                                      <Link to="#"><img src="images/usr.jpg" alt="teacher"/></Link>
                                                  </div>
                                                  <div class="name">
                                                      <Link to="#"><h6 class="x10">Yemi Akinwuntan</h6></Link>
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



                                  <div class="col-md-3">
                                      <div class="single-course mt-30">
                                          <div class="thum">
                                              <div class="image">
                                                  <img src="images/t3.jpg" alt="Course" />
                                              </div>
                                          </div>
                                          <div class="cont">
                                              <Link to="courses-single.html"><h6>New Manager Training in Essential Skills</h6></Link>
                                              <div class="course-teacher">
                                                  <div class="thum">
                                                      <Link to="#"><img src="images/usr.jpg" alt="teacher"/></Link>
                                                  </div>
                                                  <div class="name">
                                                      <Link to="#"><h6 class="x10">Yemi Akinwuntan</h6></Link>
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
                                  
                                  
                                  <div class="col-md-3">
                                      <div class="single-course mt-30">
                                          <div class="thum">
                                              <div class="image">
                                                  <img src="images/t1.jpg" alt="Course" />
                                              </div>
                                          </div>
                                          <div class="cont">
                                              <Link to="courses-single.html"><h6>New Manager Training in Essential Skills</h6></Link>
                                              <div class="course-teacher">
                                                  <div class="thum">
                                                      <Link to="#"><img src="images/usr.jpg" alt="teacher" /></Link>
                                                  </div>
                                                  <div class="name">
                                                      <Link to="#"><h6 class="x10">Yemi Akinwuntan</h6></Link>
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


export default Dashboard;  