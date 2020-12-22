import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

const Event = ({address, startTime, endTime, image, dateOfEvent, venue, description, title}) =>{

    return (
        <div class="col-lg-6">
            <div class="single-event-list mt-30">
                <div class="event-thum">
                    <img src={image} alt="Event" />
                </div>
                <div class="event-cont">
                    <span><i class="fa fa-calendar"></i> {moment(dateOfEvent).format("M, MMMM YYYY")}</span>    {/* 2 December 2018 */}
                    <Link  to="events-single.html"><h4>{title}</h4></Link>
                    <span><i class="fa fa-clock-o"></i> {moment(startTime).format('HH:mm')} - {moment(endTime).format('HH:mm')}</span>
                    <span><i class="fa fa-map-marker"></i> {venue}</span>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                </div>
            </div>
        </div>
    );
}
export default Event;