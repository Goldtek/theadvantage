import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <img src="./images/logo.png" alt=""/>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/courses">COURSES</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/coaching">COACHING</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/books">BOOKS</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/login"><i className='bx bx-log-in'></i> LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btnn" to="/signup"><i className='bx bx-log-in-circle'></i> SIGNUP</Link>
                            </li>
                        </ul>
                </div>
                
            </div>
        </nav>
        );
    }
}