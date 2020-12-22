import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, CourseBanner, Event } from '../../custom';


function Events(){
    const  d = new Date();
    
    console.log('dateOfEvent={d.getDate()2', d.getDate() + 2);
    console.log('dateOfEvent={d.getDate()', d.getDate() + 7);
    console.log('dateOfEvent={d.getDate() + 15', d.getDate() + 15);
        return(
            <div>
                <Header/>
                <CourseBanner title="Events" image="images/ban3.jpg" />

                <section id="event-page" class="pt-90 pb-120 gray-bg">
                    <div class="container">
                    <div class="row">
                        <Event address="32, Coker road, Ilupeju, Lagos" startTime={10} endTime={13} image="/images/impact.jpeg" dateOfEvent={1609327789} venue="HI Impact" description="As we celebrate the holiday season, it is time to explore the sites from where they all began! Today, join a virtual guide as we explore the Holy City through each of its four quarters as well as the nearby city of Bethlehem." title="Holiday Get Away"/>
                        <Event address="32, Coker road, Ilupeju, Lagos" startTime={10} endTime={13} image="/images/cruise.jpeg" dateOfEvent={1609241389} venue="HI Impact" description="As we celebrate the holiday season, it is time to explore the sites from where they all began! Today, join a virtual guide as we explore the Holy City through each of its four quarters as well as the nearby city of Bethlehem." title="Boat Cruise"/>
                        <Event address="Online Event" startTime={10} endTime={13} image="/images/crt.jpeg" dateOfEvent={1608895789} venue="Zoom" description="Olivier Award winners The Showstoppers return to your screens one final time this year to bring some much needed festive cheer into your living room with a special Christmas edition of their improvised musical livestream." title="The Improvised Musical Livestream -"/>
                        

                    </div> 
                        <div class="row">
                            <div class="col-lg-12">
                                <nav class="courses-pagination mt-50">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <Link  to="#" aria-label="Previous">
                                                <i class="fa fa-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li class="page-item"><Link class="active" href="#">1</Link></li>
                                        <li class="page-item"><Link  to="#">2</Link></li>
                                        <li class="page-item"><Link  to="#">3</Link></li>
                                        <li class="page-item">
                                            <Link  to="#" aria-label="Next">
                                                <i class="fa fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>  
                            </div>
                        </div> 
                    </div> 
                </section>
               
                <Footer/>
            </div>
        );
    }


export default Events;  