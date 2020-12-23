import  React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, CourseBanner, Event, Pagination } from '../../custom';


function Events(){
    const [events,SetEvents] = useState([{},{},{}])
    const [currPage, setCurrPage] = useState(1);
    const [eventsPerPage] = useState(4);
  //GET CURRENT POST
  const indexOfLastEvent = currPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currBooks = events.slice(indexOfFirstEvent, indexOfLastEvent);
  //GET CURRENT POST

  //CHANGE PAGE
  const paginate = pageNumber => setCurrPage(pageNumber);
  //CHANGE PAGE
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
                        <Event address="32, Coker road, Ilupeju, Lagos" startTime={10} endTime={13} image="/images/impact.jpeg" dateOfEvent={1609327789000} venue="HI Impact" description="As we celebrate the holiday season, it is time to explore the sites from where they all began! Today, join a virtual guide as we explore the Holy City through each of its four quarters as well as the nearby city of Bethlehem." title="Holiday Get Away"/>
                        <Event address="32, Coker road, Ilupeju, Lagos" startTime={10} endTime={13} image="/images/cruise.jpeg" dateOfEvent={1609241389000} venue="HI Impact" description="As we celebrate the holiday season, it is time to explore the sites from where they all began! Today, join a virtual guide as we explore the Holy City through each of its four quarters as well as the nearby city of Bethlehem." title="Boat Cruise"/>
                        <Event address="Online Event" startTime={10} endTime={13} image="/images/crt.jpeg" dateOfEvent={1608895789000} venue="Zoom" description="Olivier Award winners The Showstoppers return to your screens one final time this year to bring some much needed festive cheer into your living room with a special Christmas edition of their improvised musical livestream." title="The Improvised Musical Livestream"/>
                        

                    </div> 
                        <div class="row">
                            <div class="col-lg-12">
                            <Pagination
                                    PerPage={eventsPerPage}
                                    total={events.length}
                                    paginate={paginate}
                                />
                            </div>
                        </div> 
                    </div> 
                </section>
               
                <Footer/>
            </div>
        );
    }


export default Events;  