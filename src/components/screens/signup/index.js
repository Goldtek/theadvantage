import React from 'react';
import { Link } from 'react-router-dom';


function SignUp(){
    return(
    
        <section className="register-area">
            <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="register-image">
                        <img src="assets/img/mentor.png" alt="image"/>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                    <div className="register-content">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="register-form">
                                    <div className="logo">
                                        <Link to="/"><img src="images/logo.png" alt="image"/></Link>
                                    </div>
                                    <h3>Open up your Account now</h3>
                                    <p>Already signed up? <Link to="/login">Log in</Link></p>

                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" placeholder="Your email address" className="form-control"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" name="password" id="password" placeholder="Create a password" className="form-control"/>
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