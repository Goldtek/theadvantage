import React,{ Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Tolearn from '../tolearn';
import CourseInfo from '../course-info';
import Footer from '../footer';
import Header from '../header';
import TrainingInfo from '../course-info';
import { addItemToCart,removeItemFromCart } from '../../actions/cart';



const text = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nunc nec nisi rutrum, sed interdum metus mattis. Vestibulum id felis vulputate, elementum lorem vitae, suscipit eros. Suspendisse vitae pulvinar dolor. Etiam tellus purus, luctus at porttitor nec, bibendum elementum mauris. Aenean ipsum lectus, suscipit nec auctor et, tincidunt vitae justo. Duis gravida velit et dolor eleifend, at pretium nulla cursus. Fusce bibendum, dui in vehicula euismod, odio nulla euismod nulla, sodales volutpat elit libero non odio. Maecenas urna metus, pulvinar ultricies velit a, hendrerit aliquam urna.";


const EventDetail = ({address, startTime, endTime, image, dateOfEvent, venue, description, title }) => {
    const dispatch = useDispatch();
    const history =   useHistory();

    const add = cartItem => {
        try{
             dispatch(addItemToCart(cartItem));
             history.push('/cart')
        } catch(error){
            console.log(error);
        }
    }

    return (
        <Fragment>
            <Header/>
            <TrainingInfo
                name={title}
                inner="Events"
                image="./images/ban3.jpg"
            /> 
               <section id="event-single" class="pt-120 pb-120 gray-bg">
                    <div class="container">
                        <div class="events-area">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="events-left">
                                        <h3>{title}</h3>
                                        <a href="#"><span><i class="fa fa-calendar"></i> 2 December 2018</span></a>
                                        <a href="#"><span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span></a>
                                        <a href="#"><span><i class="fa fa-map-marker"></i> {venue} </span></a>
                                        <img src={image} alt="Event"/>
                                        <p>{description}</p>
                                    </div> 
                                </div>
                                <div class="col-lg-4">
                                    <div class="events-right">
                                        <div class="events-address mt-30">
                                            <ul>
                                                <li>
                                                    <div class="single-address">
                                                        <div class="icon">
                                                            <i class="fa fa-clock-o"></i>
                                                        </div>
                                                        <div class="cont">
                                                            <h6>Start Time</h6>
                                                            <span>{startTime}</span>
                                                        </div>
                                                    </div> 
                                                </li>
                                                <li>
                                                    <div class="single-address">
                                                        <div class="icon">
                                                            <i class="fa fa-bell-slash"></i>
                                                        </div>
                                                        <div class="cont">
                                                            <h6>Finish Time</h6>
                                                            <span>{endTime}</span>
                                                        </div>
                                                    </div> 
                                                </li>
                                                <li>
                                                    <div class="single-address">
                                                        <div class="icon">
                                                            <i class="fa fa-map"></i>
                                                        </div>
                                                        <div class="cont">
                                                            <h6>Address</h6>
                                                            <span> {address} </span>
                                                        </div>
                                                    </div> 
                                                </li>
                                            </ul>
                                            <div id="contact-map" class="mt-25"></div> 
                                        </div> 
                                    </div> 
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </section>
           
            <Footer/>
        </Fragment>    
    );

}

const mapStateToProps = ({ Event: {event:{ address, startTime, endTime, image, dateOfEvent, venue, description, title}}}) => ({
    address, startTime, endTime, image, dateOfEvent, venue, description, title
  });

const mapDispatchToProps = { addItemToCart,removeItemFromCart };

export default connect(mapStateToProps,mapDispatchToProps)(EventDetail);