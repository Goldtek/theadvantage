import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


export const PrivateRoute = ({
  component: Component,
  User,
  roles,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const auth = User.isAuthenticated;
      if (!auth) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: "/" }} />;
      } else {
        return <Component {...props} />;
      }

    }}
  />
);

const mapStateToProps = (state) => ({
  User: state.User,
});
export default connect(mapStateToProps, null)(PrivateRoute);
