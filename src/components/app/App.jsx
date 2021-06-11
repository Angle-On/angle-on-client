import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../home/LandingPage';
import FilmerRegistration from '../authentication/FilmerRegistration';
import InvestorRegistration from '../authentication/InvestorRegistration';
import FilmsListPage from '../films/FilmsListPage';
import ResourcesPage from '../resources/ResourcesPage';
import About from '../aboutus/About';
import FilmerApplication from '../authentication/FilmerApplication';
import FilmerPanel from '../panels/FilmerPanel'; 
import InvestorPanel from '../panels/InvestorPanel'; 
import NavigationDrawer from '../navigation/NavigationDrawer';

export default function App() {

  const redirectHome = () => { 
    window.location.replace('/');
  };

  const redirectFilms = () => { 
    window.location.replace('/films');
  };

  const redirectResources = () => { 
    window.location.replace('/resources');
  };

  // const redirectMyDashboard = () => { 
  //   window.location.replace('/filmer-dashboard);
  // };

  const redirectAboutUs = () => { 
    window.location.replace('/about-us');
  };


  return (
    <>
      <Router>
        <NavigationDrawer
          redirectHome={redirectHome}
          redirectFilms={redirectFilms}
          redirectResources={redirectResources}
          redirectAboutUs={redirectAboutUs}/>
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
            path="/filmer-application"
            exact
            component={FilmerApplication}
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
            path="/filmer-panel"
            exact
            component={FilmerPanel}
          />
          <Route
            path="/investor-panel"
            exact
            component={InvestorPanel}
          />
          <Route
            path="/about-us"
            exact
            component={About}
          />

  
          {/* 
          <FilmerDashboard/>
          <InvestorDashboard/>
          */}

        </Switch>
      </Router>
    </>
  );
}
