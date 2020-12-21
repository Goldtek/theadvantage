import React, { Fragment } from 'react';
import { Link, useHistory,Redirect } from "react-router-dom";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch,useSelector } from 'react-redux';
import './style.css';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.Cart);
    const User = useSelector(state => state.User);
    const { cart:{ items } } = Cart;
    const { user, isAuthenticated } = User;
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
            <header id="header-part">
                <div className="header-top d-none d-lg-block">
                </div> 
                
                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand" to="/">
                                        <img src="images/logo.png" alt="Logo" width="90"/>
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            {!isAuthenticated ? (
                                                <Fragment>
                                                    <li className="nav-item">
                                                        <Link className="active" to="/">Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="#">Coaching</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link to="/discovery">Discovery Package</Link></li>
                                                            <li><Link to="/vantage">Vantage Package</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/trainings">Trainings</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/books">Books</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/events">Events</Link>
                                                    </li>
                                                </Fragment>
                                            ) : (
                                                <li className="nav-item">
                                                    <Link className="active" to="/dashboard"> Dashboard </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="right-icon text-right">
                                        <ul>
                                            <li><Link to="/cart"><i className="fa fa-shopping-bag"></i><span>{items.length}</span></Link></li>
                                        </ul>
                                    </div> 
                                </nav> 
                            </div>
                        </div> 
                    </div> 
                </div>
            </header>
        );
    }

    export default Header;
