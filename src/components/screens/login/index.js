import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from "form-serialize";
import { useDispatch } from 'react-redux';
import { auth,firestore }  from '../../custom/firebase';


function Login(){
    const [loading,setLoading]=useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const  handleLogin =async e => {
        e.preventDefault();
        setLoading(true);
        const regValues = serializeForm(e.target, { hash: true });
        const { email, password } = regValues;
        
        try{
          const res = await auth.signInWithEmailAndPassword(email, password);
          const { user } = res;
        //  return console.log('user-->',user)
          dispatch({ type: 'LOGIN_SUCCESS', user });
           return history.push('/dashboard');
        } catch(error){
            console.log(error);
        }

    }
    return(
        <section className="login-area">
        <div className="row m-0">
            <div className="col-lg-7 col-md-12 p-0">
                <div className="login-image">
                    <img src="images/login.jpg" alt="image" />
                </div>
            </div>

                <div className="col-lg-5 col-md-12 p-0">
                <div className="login-content">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                
                            <div className="logo">
                                    <Link to="/"><img src="images/logo.png" alt="image"/></Link>
                                </div>

                                <h4>Welcome back</h4>
                                <p>New to TheAdvantage? <Link to="/signup">Sign up</Link></p>

                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Your email address" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="Your password" className="form-control"/>
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

export default Login;