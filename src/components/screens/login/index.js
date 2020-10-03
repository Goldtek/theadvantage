import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from "form-serialize";
import axios from 'axios';

class Login extends React.Component{

    login = e => {
        e.preventDefault();
        const regValues = serializeForm(e.target, { hash: true });
    }
    render(){
    return(
        <section className="login-area">
        <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
                <div className="login-image">
                    <img src="images/login.png" alt="image" />
                </div>
            </div>

                <div className="col-lg-6 col-md-12 p-0">
                <div className="login-content">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                
                            <div className="logo">
                                    <Link to="/"><img src="images/logo.png" alt="image"/></Link>
                                </div>

                                <h3>Welcome back</h3>
                                <p>New to AfriLearn? <Link to="/signup">Sign up</Link></p>

                                <form>
                                    <div className="form-group">
                                        <input type="email" placeholder="Your email address" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" placeholder="Your password" className="form-control"/>
                                    </div>

                                    <button type="submit">Login</button>
                                    
                                    <div className="forgot-password">
                                        <a href="#">Forgot Password?</a>
                                    </div>

                    
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </section>
    )
}
}

export default Login;