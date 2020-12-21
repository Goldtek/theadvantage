import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state => state.User);
    const { isAuthenticated } = user;
   // return console.log('isAuthenticated', isAuthenticated)
    return (
        <Route
        {...rest}
        render={props => {
            if(isAuthenticated){
                return (<Component {...props} />) ;
            } else{
            return (<Redirect to={{ pathname: "/" }} />);
            }
        }
            
        //  isAuthenticated ? (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)
        }
        />
    )
}

export default PrivateRoute;