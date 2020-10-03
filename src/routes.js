import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import {
  Home,
  Courses,
  Login,
  // Error404Page,
  SignUp,
 
 
} from "./components/index";


const Routes = () => {
  return (
    
      <Switch>
        {/* GENERAL ROUTE - NONE PROTECTED #########################################*/}

        <Route exact path="/">
        <Home />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        {/* <Route path="/packages/vantage">
          <Vantage />
        </Route> */}

      
        {/* PROTECTED ROUTES START HERE #############################################*/}

        {/* 404 ERROR ROUTE ########################################################*/}
        {/* <Route path="*">
          <Error404Page />
        </Route> */}
        {/* 404 ERROR ROUTE #######################################################*/}
      </Switch>
  );
};

export default Routes;
