import React, { Fragment } from 'react';

const CourseInfo = ({ duration, numOfVideo, numOfLessons, level, packageName }) => (
    <Fragment>
           <div className="courses-sidebar-information">
                    <ul>
                        <li>
                            <span><i className='bx bx-group'></i> Lessons:</span>
                            {numOfLessons}
                        </li>
                        <li>
                            <span><i className='bx bx-video-recording'></i> Video:</span>
                            {numOfVideo}
                        </li>
                        <li>
                            <span><i className='bx bx-time'></i> Duration:</span>
                            {duration} Hours
                        </li>
                      
                        <li>
                            <span><i className='bx bxs-badge-check'></i> Level:</span>
                            {level}
                        </li>
                        <li>
                            <span><i className='bx bx-support'></i> Language:</span>
                            English
                        </li>
                       
                    </ul>
                </div>

    </Fragment>
);

export default CourseInfo;