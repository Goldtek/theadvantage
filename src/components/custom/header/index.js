import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Header extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="container-fluid">

                <Link class="navbar-brand" href="index.html">
                    <img src="./images/logo.png" alt=""/>
                </Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-3">
                                <Link class="nav-link" to="/">HOME</Link>
                            </li>
                            <li class="nav-item mr-3">
                                <Link class="nav-link" to="/courses">COURSES</Link>
                            </li>
                            <li class="nav-item mr-3">
                                <Link class="nav-link" to="/coaching">Coaching</Link>
                            </li>
                            <li class="nav-item mr-3">
                                <Link class="nav-link" to="/login"><i class='bx bx-log-in'></i> LOGIN</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link btnn" to="/signup"><i class='bx bx-log-in-circle'></i> SIGNUP</Link>
                            </li>
                        </ul>
                </div>
                
            </div>
        </nav>
        );
    }
}