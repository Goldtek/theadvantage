import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, CourseBanner, Event } from '../../custom';


function Events(){
        return(
            <div>
                <Header/>
                <CourseBanner title="Events" image="images/ban3.jpg" />

                <section id="event-page" class="pt-90 pb-120 gray-bg">
                    <div class="container">
                    <div class="row">
                        <Event />
                        <Event />
                        <Event />

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