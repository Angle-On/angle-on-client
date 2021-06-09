import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../home/LandingPage';
import FilmerRegistration from '../authentication/FilmerRegistration';
import InvestorRegistration from '../authentication/InvestorRegistration';

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
          {/* <NavigationDrawer/> */}
          {/* add Login component into Filmer and Investor Registration */}
          {/* <FilmersPage/>
          <FilmerDetailsPage/>
          <ResourcesPage/>
          <FilmerDashboard/>
          <InvestorDashboard/>
          <AboutUs/> */}

        </Switch>
      </Router>
    </>
  );
}
