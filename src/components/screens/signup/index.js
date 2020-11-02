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
              //check
            //    if(reg.code == 400){
            //        return swal("Error",'The account details has already been registered.', "error");
            //    }
                await firestore.collection("users").add({
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
    
        <section className="register-area">
            <div className="row m-0">
                <div className="col-lg-7 col-md-12 p-0">
                    <div className="register-image">
                        <img src="assets/img/mentor.jpg" alt="image"/>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 p-0">
                    <div className="register-content">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="register-form">
                                    <div className="logo">
                                        <Link to="/"><img src="images/logo.png" alt="image"/></Link>
                                    </div>
                                    <h4>Register your Account now</h4>
                                    {regSuccess ? (<p style={{color:'#ec268f'}}>Your Account Has been successfully created. <button className='btn'  style={{color:'#ec268f'}} onClick={()=>history.push('/login')}>Click here Login</button></p>) : ( <p>Already signed up? <Link to="/login">Log in</Link></p>)}
                                   

                                    <form onSubmit={register}>
                                    <div className="form-group">
                                            <input type="input" name="name" id="name" placeholder="Fullname" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="input" name="phone" id="phone" placeholder="Phone Number" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" placeholder="Your email address" className="form-control" required/>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" name="password" id="password" placeholder="Create a password" className="form-control" required/>
                                        </div>

                                        <button type="submit" disabled={loading}>Sign Up</button>

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