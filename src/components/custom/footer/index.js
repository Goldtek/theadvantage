import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './style.css';


export default class Footer extends Component {
    render(){
        return(
            <Fragment>
                <footer>
                <div class="container-fluid">
                    <div class="row footlg align-items-center">
                        <div class="col-lg-6 mb-3">
                            <div>
                                <img src="./images/logo1.png" alt="logo"/>
                            </div>
                            
                        </div>
                        <div class="col-lg-6 mb-3r">
                            <ul class="nav ">
                                <li class="nav-item">
                                <a class="nav-link" href="#">HOME</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">SERVICES</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">COACHING</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">EVENT</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
        
                    <div class="bline mb-5"></div>
        
                    <div class="row mb-c justify-content-center">
                
                        <div class="col-lg-6 mb-3">
                            <p>
                                Advantage Network is a consulting company<br/>
                                that helps individuals and organizations<br/>
                                achieve more.
                            </p>
                        </div>
                        <div class="col-lg-3 mb-3">
                            <h4>Book Information</h4>
                            <p>
                                Yemi Akinwunta<br/>
                                yemi@theadvantage.net<br/>
                            </p>
        
                            <h4>Service</h4>
                            <p>
                                Customer Service<br/>
                                service@theadvantage.net<br/>
                            </p>
                        </div>
                        <div class="col-lg-3 mb-3">
                            <h4>Follow Us</h4>
                            <p>
                                <a href="https://www.facebook.com/advantagelive" target="_blank"><i className="bx bxl-facebook-square fa-2x mr-2"></i></a>
                                <a href="https://www.youtube.com/u/advantagelive" target="_blank"><i class="bx fa-2x bxl-youtube mr-2"></i></a>
                                <a href="https://www.instagram.com/advantagelive" target="_blank"><i class="bx fa-2x bxl-instagram"></i></a>
                            </p>
                        </div>
        
                    </div>
        
                    <div class="row">
                        <div class="col-lg-10">
                            <small>Copyright The Advantage. All rights Reserved</small>
                        </div>
                        <div class="col-lg-2">
                            <small>© 2020</small>
                        </div>
                    </div>
        
        
                </div>
            </footer>
        </Fragment>
        );
    }
}