import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function SignUp(){
    return(
    
        <section class="register-area">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="register-image">
                        <img src="assets/img/mentor.png" alt="image"/>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="register-content">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="register-form">
                                    <div class="logo">
                                        <Link to="/"><img src="images/logo.png" alt="image"/></Link>
                                    </div>

                                    <h3>Open up your Account now</h3>
                                    <p>Already signed up? <Link to="/login">Log in</Link></p>

                                    <form>
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" placeholder="Your email address" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="password" id="password" placeholder="Create a password" class="form-control"/>
                                        </div>

                                        <button type="submit">Sign Up</button>

                                     
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}

export default SignUp;