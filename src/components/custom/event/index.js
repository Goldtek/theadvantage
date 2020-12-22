import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import moment from 'moment';

const Event = ({address, startTime, endTime, image, dateOfEvent, venue, description, title}) => { 
    const dispatch = useDispatch();
    const history = useHistory();

    const ViewEvent = async (e, course) => {
        e.preventDefault();
        dispatch ({ type: 'LOAD_EVENT_DETAIL', course});
        history.push('/event-detail');
    }

    return (
        <div class="col-lg-6">
             <span style={{ cursor: 'pointer' }} onClick={(e)=> ViewEvent(e,{address, startTime, endTime, image, dateOfEvent, venue, description, title})}>
            <div class="single-event-list mt-30">
                <div class="event-thum">
                    <img src={image} alt="Event" />
                </div>
                <div class="event-cont">
                    <span><i class="fa fa-calendar"></i> {moment(dateOfEvent).format("M, MMMM YYYY")}</span>    {/* 2 December 2018 */}
                    <Link  to=""><h4>{title}</h4></Link>
                    <span><i class="fa fa-clock-o"></i> {moment(startTime).format('LT')} - {moment(endTime).format('LT')}</span>
                    <span><i class="fa fa-map-marker"></i> {venue}</span>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                </div>
            </div>
            </span>
        </div>
    );
}
export default Event;