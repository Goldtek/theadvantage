import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from "form-serialize";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth,firestore }  from '../../custom/firebase';


function Login(){
    const [loading,setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const  handleLogin =async e => {
        e.preventDefault();
        setLoading(true);
        const regValues = serializeForm(e.target, { hash: true });
        const { email, password } = regValues;
        
        try{
        const res = await auth.signInWithEmailAndPassword(email, password);
        // use the uid and fetch the user
        const { user: { uid } } = res;
        const doc = await firestore.collection('users').doc(uid).get();
        const user = doc.data();
        dispatch({ type: 'LOGIN_SUCCESS', user });
        toast.success("Login Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        return history.push('/dashboard');
        } catch(error){
            toast.error(`${error}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }

    }
    return(
        <section class="signup pt-105 pb-120 gray-bg">
            <div class="container">
                <div class="col-md-8 offset-md-2">
                    <div class="signup-content">
                        <form onSubmit={handleLogin} id="signup-form" class="signup-form">
                            <h3 class="form-title pb-20">Welcome back.</h3>

                            <div class="form-group">
                                <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
                                <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                            </div>

                            <a href="#" class="loginhere-link">Forgot password</a><br/>
                            <div class="form-group">
                                <input type="submit" name="submit" id="submit" class="main-btn register-submit" value="Sign in"/>
                            </div>
                        </form>
                        <p class="loginhere">
                            
                            Dont have an account? <a href="/signup" class="loginhere-link">Register Here</a>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Login;