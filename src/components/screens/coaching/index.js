import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, CourseBanner, Footer, Book,Course } from '../../custom';

export default class Coaching extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div class=" container-fluid ">
                    <div class="row">
                        <h3>Coaching Packages</h3>  
                        <div class="dline"/>
                    </div>
                </div>
                        
                        <section class="pricing-area ptb-100">
                            <div class="container">
                                <div class="pricing-table table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Packages</th>
                                                <th scope="col">Discovery</th>
                                                <th scope="col">Vantage</th>
                                                <th scope="col">Executive</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr>
                                                <td> Purpose Discovery Sessions</td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td>Vantage and more</td>
                                            </tr>
                                            <tr>
                                                <td>Purpose Activation Program</td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Personal Leadership Classes</td>
                                                <td><i class='bx bx-x bg-icon'></i></td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>One-on-one coaching</td>
                                                <td><i class='bx bx-x bg-icon'></i></td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>360⁰ Life Assessment Program</td>
                                                <td><i class='bx bx-x bg-icon'></i></td>
                                                <td><i class='bx bx-check'></i></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Duration</td>
                                                <td>2 weeks</td>
                                                <td>10 weeks </td>
                                                <td>6 months</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>$250</td>
                                                <td>$1,250</td>
                                                <td>$15,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td><a href="#" class="d-block" target="_blank">Subscribe</a></td>
                                                <td><a href="#" class="d-block" target="_blank">Subscribe</a></td>
                                                <td><a href="#" class="d-block" target="_blank">Subscribe</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    
                   
                <Footer/>
            </div>
        );
    }
}