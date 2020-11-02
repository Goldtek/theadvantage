import React, { Fragment } from 'react';
import { Link, useHistory,Redirect } from "react-router-dom";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch,useSelector } from 'react-redux';
import './style.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const history = useHistory();
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.Cart);
    const { cart:{ items } } = Cart;
    console.log("cart-->",Cart)
    const logout = () => {
        try{ 
            auth.signOut();
            dispatch({ type: 'LOG_OUT' });
            return history.push('/');
           
        } catch(error) {
            console.log('error',error);
        }
    }

    
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
                            {!(user) ?
                           (
                            <Fragment>
                                <li className="nav-item mr-3">
                                    <a className="nav-link" href="http://madebydotun.com/theadvantage/home.html">HOME</a>
                                </li>
                                <li className="nav-item dropdown ml-auto">
                                    <Link className="nav-link" data-toggle="dropdown"> SERVICES</Link>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <Link to="/trainings" class="dropdown-item"> Personal Edge</Link>
                                        <div class="dropdown-divider"></div>
                                        <Link to="#" class="dropdown-item" > Business Edge</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-auto">
                                    <Link className="nav-link" data-toggle="dropdown"> COACHING</Link>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <Link to="/discovery" class="dropdown-item">Discovery Package</Link>
                                        <div class="dropdown-divider"></div>
                                        <Link to="/vantage" class="dropdown-item" >Vantage Package</Link>
                                    </div>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link className="nav-link" to="/books">BOOKS</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link className="nav-link" to="#">EVENTS</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link className="nav-link" to="/login"> LOGIN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btnn" to="/signup">SIGNUP</Link>
                                </li>
                            </Fragment>
                           )
                            :
                            (
                                <Fragment>
                                <li className="nav-item mr-3">
                                    <a className="nav-link" href="http://madebydotun.com/theadvantage/home.html">HOME</a>
                                </li>
                                    <li className="nav-item dropdown ml-auto">
                                    <Link className="nav-link" data-toggle="dropdown"> SERVICES</Link>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <Link to="/trainings" class="dropdown-item"> Personal Edge</Link>
                                        <div class="dropdown-divider"></div>
                                        <Link to="#" class="dropdown-item" > Business Edge</Link>
                                    </div>
                                </li>
                                    <li className="nav-item mr-3">
                                        <Link className="nav-link" to="/books">BOOKS </Link>
                                    </li> 
                                    <li className="nav-item mr-3">
                                        <Link className="nav-link" to="/dashboard">DASHBOARD </Link>
                                    </li> 
                                    <li className="nav-item mr-3">
                                        <Link className="nav-link" to="/cart"  style={{position:'relative'}}>
                                            <i className='bx bxs-cart bx-sm'></i>
                                            <span class="noti">{items.length}</span> 
                                         </Link>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <Link className="nav-link" to="#"><i className='bx bx-bell icon-size bx-sm'></i> </Link>
                                    </li>
                                    <li className="nav-item dropdown ml-auto">
                                        <div className='userPhoto' data-toggle="dropdown"></div>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <Link to="#" class="dropdown-item">Settings</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link to="#" class="dropdown-item" onClick={() => logout()}>Logout</Link>
                                        </div>
                                    </li>
                                </Fragment>
                            )
                                
                              }
                        </ul>
                </div>
                
            </div>
        </nav>
        );
    }

    export default Header;
