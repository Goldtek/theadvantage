import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './firebase';

const PrivateRoute = ({ component: Component,user, ...rest }) => (
    <Route
    {...rest}
    render={props =>{
        if(user == true){
            return (<Component {...props} />) ;
        } else{
        return (<Redirect to={{ pathname: "/" }} />);
        }
    }
        
      //  auth.onAuthStateChanged(user => (user) ? (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />))
    }
    />
)

export default PrivateRoute;