import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './style.css';


export default class Footer extends Component {
    render(){
        return(
            <footer id="footer-part">
            <div className="footer-top pt-40 pb-70">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-about mt-40">
                                <div className="logo">
                                <Link to="#"><img src="images/logo1.png" alt="Logo" width="90" /></Link>
                                </div>
                                <p style={{ width: '77%' }}>
                                        Advantage Network is a consulting company
                                        that helps individuals and organizations
                                        achieve more. 
                                </p>
    
                            </div> 
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-link support mt-40">
                                <div className="footer-title pb-10">
                                    <h6>Support</h6>
                                </div>
                                <p className="text-white mb-30">
                                    Yemi Akinwunta<br/>
                                    yemi@theadvantage.net
                                </p>
    
                                <div className="footer-title pb-10">
                                    <h6>Service</h6>
                                </div>
                                <p className="text-white">
                                    Customer Service<br/>
                                    service@theadvantage.net
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-address mt-40">
                                <div className="footer-title pb-10">
                                    <h6>Follow Us</h6>
                                </div>
                                <p>
                                    <Link to="#"><i className="fa fa-2x fa-facebook-square mr-2"></i></Link>
                                    <Link to="#"><i className="fa fa-2x fa fa-twitter mr-2"></i></Link>
                                    <Link to="#"><i className="fa fa-2x fa-instagram"></i></Link>
                                </p>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div> 
            
            <div className="footer-copyright pt-10 pb-25">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="copyright text-md-left text-center pt-15">
                                <p>&copy; 2020 The Advantage. All rights Reserved  </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="copyright text-md-right text-center pt-15">
                                <p>&copy; 2020</p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 
        </footer>
        );
    }
}