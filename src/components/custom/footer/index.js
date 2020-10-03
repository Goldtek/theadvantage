import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Footer extends Component {
    render(){
        return(
            <footer>
          
                <div class="footer-bottom-area">
                    <div class="container">
                        <div className="single-footer-widget mb-3 col-md-8">
                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                            </ul>
                            <p><i class='bx bx-copyright'></i>2020 <a href="#" > Afrilearn</a> All rights reserved.</p>
                        </div>
                      
                    </div>
                </div>
           
            </footer>
        );
    }
}