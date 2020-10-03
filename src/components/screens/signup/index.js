import React from 'react';
import { Link } from 'react-router-dom';
import serializeForm from "form-serialize";
import axios from 'axios';

class SignUp extends React.Component{

    register = (e) => {
        e.preventDefault();
        const regValues = serializeForm(e.target, { hash: true });
        const { email,password } = regValues;
        try{
            if (email.trim() == "") {
                alert("Enter Email");
            } else if (password.trim().length < 7) {
                alert("Password must be at least 7 characters");
            } else {
              
            
            }
        }catch(error){
            console.log(error);
        }
    }
    render(){
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

                                    <form onSubmit={this.register}>
                                    <div className="form-group">
                                            <input type="input" name="name" id="name" placeholder="Fullname" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="input" name="phone" id="phone" placeholder="Phone Number" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" placeholder="Your email address" className="form-control"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" name="password" id="password" placeholder="Create a password" className="form-control"/>
                                        </div>

                                        <button type="submit">Sign Up</button>

                                     {console.log('firebase',window.firebase)}
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
}

export default SignUp;