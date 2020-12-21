import React,{ useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import serializeForm from "form-serialize";
import swal from 'sweetalert';
import { auth,firestore }  from '../../custom/firebase';

const SignUp = () => {
    const [loading,setLoading] = useState(false);
    const [regSuccess,setRegsuccess] = useState(false);
    const history = useHistory();


   const register = async(e) => {
        e.preventDefault();
        setLoading(true);
        const regValues = serializeForm(e.target, { hash: true });
        const { email,password,name,phone } = regValues;
        try{
            if (email.trim() == "") {
                alert("Enter Email");
            } else if (password.trim().length < 7) {
                alert("Password must be at least 7 characters");
            } else {
                console.log('password==>',password);
                const reg = auth.createUserWithEmailAndPassword(email, password);
                const uid = reg.user._user.uid;
                console.log('reg', reg);
                await firestore.collection("users").doc(uid).set({
                    email,
                    name,
                    phone,
                });
                setRegsuccess(true);
              //  swal("Good job!", "Your Account Has been successfully registered.", "success")
                // .then((value) => {
                //     history.push('/login');
                //   });
              //  
             //   return
            
            }
        }catch(error){
            console.log(error);
            swal("Error",error.code, "error");
        }
    }
 
    return(
        

        <section class="signup pt-105 pb-120 gray-bg">
            <div class="container">
                <div class="col-md-8 offset-md-2">
                    <div class="signup-content">
                        <form onSubmit={register} class="signup-form">
                            <h3 class="form-title pb-20">Create account</h3>
                            <div class="form-group">
                                <input type="text" class="form-input" required name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-input" required name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-input" required name="password" id="password" placeholder="Password"/>
                                <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-input" required name="re_password" id="re_password"  placeholder="Repeat your password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span> I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" id="submit" class="main-btn register-submit" value="Sign up"/>
                            </div>
                        </form>
                        <p class="loginhere">
                            Have already an account ? <a href="/login" class="loginhere-link">Login here</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
       );

}

export default SignUp;