import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../home/LandingPage';
import FilmerRegistration from '../authentication/FilmerRegistration';
import InvestorRegistration from '../authentication/InvestorRegistration';
import FilmsListPage from '../films/FilmsListPage';
import ResourcesPage from '../resources/ResourcesPage';
import About from '../aboutus/About';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={LandingPage}   
          />
          <Route
            path="/filmer-registration"
            exact
            component={FilmerRegistration}
          />
          <Route
            path="/investor-registration"
            exact
            component={InvestorRegistration}
          />
          <Route
            path="/films"
            exact
            component={FilmsListPage}
          />
          <Route
            path="/resources"
            exact
            component={ResourcesPage}
          />
          <Route
            path="/about-us"
            exact
            component={About}
          />

          {/* <NavigationDrawer/> */}
  
          {/* 
          <FilmerDashboard/>
          <InvestorDashboard/>
          */}

        </Switch>
      </Router>
    </>
  );
}
