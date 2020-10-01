import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import {
  Home,
  Courses,
  Login,
  // Error404Page,
  SignUp,
  Coaching,
  Discovery,
  Books,
  BookDetail
 
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

        <Route exact path="/signup">
          <SignUp />
        </Route>

        
        <Route exact path="/coaching">
          <Coaching />
        </Route>

        <Route exact path="/discovery">
          <Discovery />
        </Route>

        <Route exact path="/books">
          <Books />
        </Route>

        <Route exact path="/book/:id" component={BookDetail} />

        {/* <Route path="/packages/vantage">
          <Vantage />
        </Route> */}

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
