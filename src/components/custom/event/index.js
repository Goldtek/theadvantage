import React from 'react';
import { Link } from "react-router-dom";

const Event = ({title, image, date, time, venue, description}) => (
    <div class="col-lg-6">
        <div class="single-event-list mt-30">
            <div class="event-thum">
                <img src="images/e-1.jpg" alt="Event" />
            </div>
            <div class="event-cont">
                <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                <Link  to="events-single.html"><h4>Tech Summit</h4></Link>
                <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
            </div>
        </div>
    </div>
);

export default Event;