import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Book } from '../../custom';

function Discovery(){
        return(
            <div>
                <Header/>

                <section class="courses-details-area pt-100 pb-70">
            <div class="container">
                <div class="courses-details-header">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <div class="courses-title">
                                <h2>Discovery Package</h2>
                            </div>
 
                        </div>

                        <div class="col-lg-4">
                            <div class="courses-price">
                                <div class="price">$150</div>
                                <a href="#" class="default-btn"><i class='bx bx-paper-plane icon-arrow before'></i><span class="label">Buy Course</span><i class="bx bx-paper-plane icon-arrow after"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div class="courses-details-image text-center">
                            <img src="assets/img/courses/3.jpg" alt="image"/>
                        </div>

                        <div class="courses-details-desc">
                            <h3>Description</h3>
                            <p><strong>Hi! Welcome to Photography Crash Course for Photographer, the only course you need to become a BI Analyst.</strong></p>

                            <p>Here are some more details of what you get with The Business Intelligence Analyst Course:</p>

                            <p class="description-features-list">
                                The Discovery Package is tailored made exclusively for those seeking to discover, define and deploy their purpose. Knowledge, activities and tasks in the Discovery Package will jumpstart your journey to discovery, 
                                     confidence and beginning steps to fulfilment.
                                 </p>

                            <h3>Courses Video</h3>
                            <div class="courses-accordion">
                                <ul class="accordion">
                                    <li class="accordion-item">
                                        <a class="accordion-title active" href="javascript:void(0)">
                                            <i class='bx bx-chevron-down'></i>
                                            Section 1: ReactJS - Getting Started
                                        </a>
        
                                        <div class="accordion-content show">
                                            <ul class="courses-lessons">
                                                <li class="single-lessons">
                                                    <div class="d-md-flex d-lg-flex align-items-center">
                                                        <span class="number">01.</span>
                                                        
                                                        <a href="#" class="lessons-title">Introduction</a>
                                                        
                                                        <span class="preview">Preview</span>
                                                    </div>

                                                    <div class="lessons-info">
                                                        <span class="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i class='bx bx-time'></i> 5 minute</span>

                                                        <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="attrachment-video popup-youtube" data-toggle="tooltip" data-placement="top" title="Play Video"><i class='bx bx-play-circle'></i> Video</a>
                                                    </div>
                                                </li>

                                                <li class="single-lessons">
                                                    <div class="d-md-flex d-lg-flex align-items-center">
                                                        <span class="number">02.</span>
                                                        
                                                        <a href="#" class="lessons-title">What is React?</a>
                                                        
                                                        <span class="preview">Preview</span>
                                                    </div>

                                                    <div class="lessons-info">
                                                        <span class="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i class='bx bx-time'></i> 10 minute</span>

                                                        <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="attrachment-video popup-youtube" data-toggle="tooltip" data-placement="top" title="Play Video"><i class='bx bx-play-circle'></i> Video</a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li class="accordion-item">
                                        <a class="accordion-title" href="javascript:void(0)">
                                            <i class='bx bx-chevron-down'></i>
                                            Section `2: Integrating with Other Libraries
                                        </a>
        
                                        <div class="accordion-content">
                                            <ul class="courses-lessons">
                                                 <li class="single-lessons">
                                                    <div class="d-md-flex d-lg-flex align-items-center">
                                                        <span class="number">04.</span>
                                                        
                                                        <a href="#" class="lessons-title">Real-World SPAs</a>
                                                        
                                                        <span class="locked">Locked</span>
                                                    </div>

                                                    <div class="lessons-info">
                                                        <span class="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i class='bx bx-time'></i> 50 minute</span>

                                                        <a href="#" class="attrachment-video" data-toggle="tooltip" data-placement="top" title="Download Video"><i class='bx bx-file'></i> File</a>
                                                    </div>
                                                </li>

                                                <li class="single-lessons">
                                                    <div class="d-md-flex d-lg-flex align-items-center">
                                                        <span class="number">05.</span>
                                                        
                                                        <a href="#" class="lessons-title">Adding the Right React Version</a>
                                                        
                                                        <span class="locked">Locked</span>
                                                    </div>

                                                    <div class="lessons-info">
                                                        <span class="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i class='bx bx-time'></i> 58 minute</span>

                                                        <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="attrachment-video popup-youtube" data-toggle="tooltip" data-placement="top" title="Play Video"><i class='bx bx-play-circle'></i> Video</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h3>What you'll learn</h3>

                            <div class="why-you-learn">
                                <ul>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Become an expert in Statistics
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Boost your resume with skills
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Gather, organize, data
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Use data for improved
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Present information KPIs
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Perform quantitative
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Analyze current data
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Discover how to find trends
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Understand the fundamentals
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class='bx bx-check'></i>
                                            Use SQL to create, design
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-4">
                        <div class="courses-sidebar-information">
                            <ul>
                                <li>
                                    <span><i class='bx bx-group'></i> Lectures:</span>
                                    40
                                </li>
                                <li>
                                    <span><i class='bx bx-video-recording'></i> Video:</span>
                                    200
                                </li>
                                <li>
                                    <span><i class='bx bx-time'></i> Duration:</span>
                                    200 Hours
                                </li>
                                <li>
                                    <span><i class='bx bxs-graduation'></i> Subject:</span>
                                    Photography
                                </li>
                                <li>
                                    <span><i class='bx bx-atom'></i> Quizzes:</span>
                                    Yes
                                </li>
                                <li>
                                    <span><i class='bx bxs-badge-check'></i> Level:</span>
                                    Introductory
                                </li>
                                <li>
                                    <span><i class='bx bx-support'></i> Language:</span>
                                    English
                                </li>
                                <li>
                                    <span><i class='bx bx-text'></i> Video Subtitle:</span>
                                    English
                                </li>
                                <li>
                                    <span><i class='bx bx-certification'></i> Certificate:</span>
                                    Yes
                                </li>
                            </ul>
                        </div>

                        <div class="courses-purchase-info">
                            <h4>Interested in this course for your Business or Team?</h4>
                            <p>Train your employees in the most in-demand topics, with edX for Business.</p>

                            <a href="#" class="d-inline-block">Purchase now</a>
                            <a href="#" class="d-inline-block">Request Information</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
              
                <Footer/>
            </div>
        );
    }


export default Discovery;  