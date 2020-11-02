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
            <DashboardBanner 
            name
            />
              <div className='container'>
                <div className='row mb-30'>
                  <h5> Continue Trainings</h5>  
                  <div className="dline"/>
                  <div className='col-md-3 '>
                    <Link className='anchor' to='/lesson'>
                      <div className='inProgress'>
                        <img src='images/courses/more.png'/>
                          <h5>Discovery Package</h5>
                          <div class="meter animate">
                            <span style={{width: "3%"}}></span>
                          </div>
                      </div> 
                    </Link>
                  </div>
                </div>

                <div className='row mb-30 '>
                  <h5>Coaching Packages</h5>
                  <div className="brk"/>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-featured-box">
                                    <div class="icon">
                                        <i class="fa fa-clipboard-list"></i>
                                    </div>
                                    <h3 class="playfair-display">Discovery Package</h3>
                                    <p>The Discovery Package is tailored made exclusively for those seeking to discover, define and deploy their purpose.</p>
                                    <Link to="/discovery" class="link-btn">Start Now</Link>
                                </div>
                            </div>

                      <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-featured-box">
                                    <div class="icon">
                                        <i class="fa fa-ankh"></i>
                                    </div>
                                    <h3 class="playfair-display">Vantage Package</h3>
                                    <p>This is for those who may have had some degree of certainty in their discovery of purpose will quickly embrace the Package.</p>
                                    <Link to="/vantage" class="link-btn">Start Now</Link>
                                </div>
                            </div>

                      <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div class="single-featured-box">
                                <div class="icon">
                                    <i class="fa fa-accusoft"></i>
                                </div>
                                <h3 class="playfair-display">Executive Edge</h3>
                                <p>This is a premium package that offers a continuous development programs & coaching for top executives, businesspersons, and leaders.</p>
                                <Link to="/executive" class="link-btn">Start Now</Link>
                            </div>
                        </div>
                    
                </div>

                <div className='row'>
                <h5>Trainings <Link to="/trainings" className="lik">View All</Link></h5>  
                        <div className="dline"/>
                        <div className="row mt-5">
                        <Book source="images/courses/lap.jpg" title="Straight Business: for business managers & Leaders"  id={6} quantity={1}/>
                            <Book source="images/courses/9.jpg" title="The Complete Communication Skills Master className for Life"  id={2} quantity={1}/>
                            <Book source="images/courses/book.jpeg" title="The Complete Management Skills Certification Course"  id={7} quantity={1}/>
                            <Book source="images/courses/16.jpg" title="Leadership: Practical Leadership Skills"  id={5} quantity={1}/>
                        </div>
                </div>

              </div>

            <Footer/>
        </Fragment>
    );
    }


export default Dashboard;  