import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Footer extends Component {
    render(){
        return(
            <footer>
                <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget mb-30">
                            <h3>Contact Us</h3>

                            <ul class="contact-us-link">
                               
                                <li>
                                    <i class='bx bx-envelope'></i>
                                    <a href="#">service@theadvantage.net</a>
                                </li>
                                <li>
                                    <i class='bx bx-envelope'></i>
                                    <a href="#">yemi@theadvantage.net</a>
                                </li>
                            </ul>

                            <ul class="social-link">
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-youtube'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget mb-30">
                            <h3>Company</h3>

                            <ul class="useful-link">
                                <li><a href="#">AboutUS</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Coaching</a></li>
                                <li><a href="#">Events</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget mb-30">
                            <h3>Newsletter</h3>

                            <div class="newsletter-box">
                                <p>To get the latest news and latest updates from us.</p>

                                <form class="newsletter-form" data-toggle="validator">
                                    <label>Your e-mail address:</label>
                                    <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off"/>
                                    <button type="submit">Subscribe</button>
                                    <div id="validator-newsletter" class="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom-area">
                <div class="container">
                    <p><i class='bx bx-copyright'></i>2020 <a href="#" > TheAdvantage</a> Designed By <a href="#">Goldtek Ventures</a> | All rights reserved.</p>
                </div>
            </div>
            </footer>
        );
    }
}