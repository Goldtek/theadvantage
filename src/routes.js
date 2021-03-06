import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from '../src/components/custom/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Home,
  Trainings,
  Login,
  // Error404Page,
  SignUp,
  Coaching,
  Discovery,
  Books,
  Dashboard,
  Lesson, 
  Checkout,
  Vantage,
  Cart,
  Events,
  Executive,
  
 
} from "./components/index";

import { PrivateRoute,CourseDetail, EventDetail } from './components/custom';


const Routes = () => {
  const [user] = useAuthState(auth);
  return (
    
      <Switch>
        {/* GENERAL ROUTE - NONE PROTECTED #########################################*/}

       

        <Route exact path="/trainings">
          <Trainings />
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

        <Route path="/discovery">
          <Discovery />
        </Route>

        <Route path="/vantage">
          <Vantage />
        </Route>

        <Route path="/executive">
          <Executive />
        </Route>

        <Route exact path="/books">
          <Books />
        </Route>

        
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />

        <Route path="/training-detail" component={CourseDetail} />

        <Route path="/events" component={Events} />

        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/event-detail">
        <EventDetail />
        </Route>

        {/* <Route path="/packages/vantage">
          <Vantage />
        </Route> */}

        {/* GENERAL ROUTE - NONE PROTECTED ############################################*/}

        {/* PROTECTED ROUTES START HERE #############################################*/}
        
        <Route user={user} exact path="/dashboard" component={Dashboard} />

        <Route exact path="/lesson" component={Lesson} />

        {/* <PrivateRoute
          user={(user != null) ? true : false}
            exact
            path="/lesson"
            component={Lesson}
        /> */}

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
