import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer} from '../../custom';

export default class Coaching extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div className=" container-fluid ">
                    <div className="row">
                         
                        <div className="dline"/>
                    </div>
                </div>
                        
                        <section className="pricing-area ptb-100">
                            <div className="container">
                          

                                <div className="pricing-table table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Coaching Packages</th>
                                                <th scope="col">Discovery</th>
                                                <th scope="col">Vantage</th>
                                                <th scope="col">Executive Edge </th>
                                                <th scope="col">Premium Executive</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr>
                                                <td> Purpose Discovery Sessions</td>
                                                <td><i className='bx bx-check'></i></td>
                                                <td><i className='bx bx-check'></i></td>
                                                <td>Vantage and more</td>
                                                <td>Executive Edge and more</td>
                                            </tr>
                                            <tr>
                                                <td>Purpose Activation Program</td>
                                                <td><i className='bx bx-check'></i></td>
                                                <td><i className='bx bx-check'></i></td>
                                               
                                            </tr>
                                            <tr>
                                                <td>Personal Leadership classNamees</td>
                                                <td><i className='bx bx-x bg-icon'></i></td>
                                                <td><i className='bx bx-check'></i></td>
                                               
                                            </tr>
                                            <tr>
                                                <td>One-on-one coaching</td>
                                                <td><i className='bx bx-x bg-icon'></i></td>
                                                <td><i className='bx bx-check'></i></td>
                                            </tr>
                                            <tr>
                                                <td>360⁰ Life Assessment Program</td>
                                                <td><i className='bx bx-x bg-icon'></i></td>
                                                <td><i className='bx bx-check'></i></td>
                                            </tr>
                                            <tr>
                                                <td>Duration</td>
                                                <td>2 weeks</td>
                                                <td>10 weeks </td>
                                                <td>6 months</td>
                                                <td>12 months</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>$250</td>
                                                <td>$1,250</td>
                                                <td>$15,000</td>
                                                <td>$25,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td><Link className="d-block"  to="/discovery">Subscribe</Link></td>
                                                <td><a href="#" className="d-block" target="_blank">Subscribe</a></td>
                                                <td><a href="#" className="d-block" target="_blank">Subscribe</a></td>
                                                <td><a href="#" className="d-block" target="_blank">Subscribe</a></td>
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