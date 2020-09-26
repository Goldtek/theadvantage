import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import {
  Home,
  Courses,
  Login,
  // Error404Page,
  SignUp,
  Coaching
 
} from "./components/index";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        {/* GENERAL ROUTE - NONE PROTECTED #########################################*/}

        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/courses">
          <Courses />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        
        <Route path="/coaching">
          <Coaching />
        </Route>

        {/* GENERAL ROUTE - NONE PROTECTED ############################################*/}

        {/* PROTECTED ROUTES START HERE #############################################*/}
        {/* <Route exact path="/dashboard">
          <Dasboard />
        </Route>

        <Route path="/dashboard/gpa/create">
          <CreateCourse />
        </Route> */}

        {/* PROTECTED ROUTES START HERE #############################################*/}

        {/* 404 ERROR ROUTE ########################################################*/}
        {/* <Route path="*">
          <Error404Page />
        </Route> */}
        {/* 404 ERROR ROUTE #######################################################*/}
      </Switch>
    </Fragment>
  );
};

export default Routes;
