import React from 'react';

import Tolearn from '../tolearn';
import CourseInfo from '../course-info';

const Package = ({price, packageName, description, toLearn, level, duration, numOfVideo, numOfLessons,  videos, Image }) => (
<section className="courses-details-area pt-100 pb-70 mb-30">
    <div className="container">
        <div className="courses-details-header">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <div className="courses-title">
                        <h2>{packageName}</h2>
                    </div>

                </div>

                <div className="col-lg-4">
                    <div className="courses-price">
                        <div className="price">${price}</div>
                        <a href="#" className="default-btn"><i className='bx bx-paper-plane icon-arrow before'></i><span className="label">Buy Course</span><i className="bx bx-paper-plane icon-arrow after"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-8">
                <div className="courses-details-image text-center">
                    <img src={Image} alt="image"/>
                </div>

                <div className="courses-details-desc">
                    <h3>Description</h3>

                    <p>Here are some more details of what you get with The Advantage {packageName}:</p>

                    <p className="description-features-list">
                        {description}
                      </p>

                    <h3>Courses Video</h3>
                    <div className="courses-accordion">
                        <ul className="accordion">
                            <li className="accordion-item">
                                <a className="accordion-title active" href="javascript:void(0)">
                                    <i className='bx bx-chevron-down'></i>
                                    Week 1:	Purpose Discovery - Getting Started
                                </a>

                                <div className="accordion-content show">
                                    <ul className="courses-lessons">
                                        <li className="single-lessons">
                                            <div className="d-md-flex d-lg-flex align-items-center">
                                                <span className="number">01.</span>
                                                
                                                <a href="#" className="lessons-title">Welcome Video</a>
                                                
                                                <span className="preview">Preview</span>
                                            </div>

                                            <div className="lessons-info">
                                                <span className="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i className='bx bx-time'></i> 5 minute</span>

                                                <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="attrachment-video popup-youtube" data-toggle="tooltip" data-placement="top" title="Play Video"><i className='bx bx-play-circle'></i> Video</a>
                                            </div>
                                        </li>

                                        <li className="single-lessons">
                                            <div className="d-md-flex d-lg-flex align-items-center">
                                                <span className="number">02.</span>
                                                
                                                <a href="#" className="lessons-title">Purpose Discovery?</a>
                                                
                                                <span className="preview">Preview</span>
                                            </div>

                                            <div className="lessons-info">
                                                <span className="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i className='bx bx-time'></i> 10 minute</span>

                                                <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="attrachment-video popup-youtube" data-toggle="tooltip" data-placement="top" title="Play Video"><i className='bx bx-play-circle'></i> Video</a>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className='bx bx-chevron-down'></i>
                                    Week 2:	Purpose Activation Program
                                </a>

                                <div className="accordion-content">
                                    <ul className="courses-lessons">
                                         <li className="single-lessons">
                                            <div className="d-md-flex d-lg-flex align-items-center">
                                                <span className="number">01.</span>
                                                
                                                <a href="#" className="lessons-title">Real-World SPAs</a>
                                                
                                                <span className="locked">Locked</span>
                                            </div>

                                            <div className="lessons-info">
                                                <span className="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i className='bx bx-time'></i> 50 minute</span>

                                                <a href="#" className="attrachment-video" data-toggle="tooltip" data-placement="top" title="Download Video"><i className='bx bx-file'></i> File</a>
                                            </div>
                                        </li>

                                        <li className="single-lessons">
                                            <div className="d-md-flex d-lg-flex align-items-center">
                                                <span className="number">05.</span>
                                                
                                                <a href="#" className="lessons-title">Adding the Right React Version</a>
                                                
                                                <span className="locked">Locked</span>
                                            </div>

                                            <div className="lessons-info">
                                                <span className="duration" data-toggle="tooltip" data-placement="top" title="Duration"><i className='bx bx-time'></i> 58 minute</span>

                                                <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="attrachment-video popup-youtube" data-toggle="tooltip" data-placement="top" title="Play Video"><i className='bx bx-play-circle'></i> Video</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <h3>What you'll learn</h3>

                    <div className="why-you-learn">
                        <ul>
                            {toLearn.map((name)=> <Tolearn name={name} />)}  
                        </ul>
                    </div>
                </div>

            </div>

            <div className="col-lg-4">
                <CourseInfo packageName={packageName} level={level} duration={duration} numOfVideo={numOfVideo} numOfLessons={numOfLessons} />
            </div>
        </div>
    </div>
</section>
      
);

export default Package;