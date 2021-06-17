import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../home/index';
import FilmerRegistration from '../authentication/FilmerRegistration';
import InvestorRegistration from '../authentication/InvestorRegistration';
import FilmsListPage from '../films/FilmsListPage';
import ResourcesPage from '../resources/ResourcesPage';
import About from '../aboutus/About';
import FilmerApplication from '../authentication/FilmerApplication';
import FilmerPanel from '../panels/FilmerPanel'; 
import InvestorPanel from '../panels/InvestorPanel'; 
import NavigationDrawer from '../navigation/NavigationDrawer';
import Stripe from '../stripe/Stripe';
import './App.css';
import ModalParent from '../modal/ModalParent';
import { verifyUser } from '../../services/apiUtils';
import { GoogleLogout } from 'react-google-login';

// import PrivateRoute from './PrivateRoute';




export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); 
  const profile = { user, loading }; 
  
  useEffect(() => {
    setLoading(true); 
    verifyUser()
      .then(user => setUser(user))
      .finally(() => setLoading(false)); 
  }, []); 


  const redirectHome = () => { 
    window.location.replace('/');
  };

  const redirectFilms = () => { 
    window.location.replace('/films');
  };

  const redirectResources = () => { 
    window.location.replace('/resources');
  };

  const redirectMyDashboard = () => { 
    window.location.replace('/filmer-panel');
  };

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
          redirectAboutUs={redirectAboutUs}
          redirectMyDashboard={redirectMyDashboard}
        />
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
            activeUser={profile}

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
            activeUser={profile}

          />
          <Route
            path="/investor-panel"
            activeUser={profile}
            exact
            component={InvestorPanel}
          />
          <Route
            path="/about-us"
            exact
            component={About}
          />
          <Route
            path="/modal"
            exact
            component={ModalParent}
          />
          <Route
            path="/donation"
            exact
            component={Stripe}
          />
        </Switch>
      </Router>
    </>
  );
}
