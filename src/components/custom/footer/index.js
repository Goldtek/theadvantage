import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget mb-30">
                            <h3>Contact Us</h3>

                            <ul className="contact-us-link">
                               
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="#">service@theadvantage.net</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="#">yemi@theadvantage.net</a>
                                </li>
                            </ul>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget mb-30">
                            <h3>Company</h3>

                            <ul className="useful-link">
                                <li><a href="#">AboutUS</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Coaching</a></li>
                                <li><a href="#">Events</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget mb-30">
                            <h3>Newsletter</h3>

                            <div className="newsletter-box">
                                <p>To get the latest news and latest updates from us.</p>

                                <form className="newsletter-form" data-toggle="validator">
                                    <label>Your e-mail address:</label>
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off"/>
                                    <button type="submit">Subscribe</button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            </footer>
        );
    }
}