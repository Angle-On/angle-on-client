/* eslint-disable max-len */
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
import { verifyDirectorUser, verifyInvestorUser } from '../../services/apiUtils';
// import { gapi } from 'gapi-script';
// import PrivateRoute from './PrivateRoute';

export default function App() {
  const [director, setDirector] = useState(null);
  const [investor, setInvestor] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const profile = { director, loading }; 
  const investorProfile = { investor, loading }; 
  
  useEffect(() => {
    setLoading(true); 
    verifyDirectorUser()
      .then(director => setDirector(director))
      .finally(() => setLoading(false)); 
  }, []); 

  useEffect(() => {
    setLoading(true); 
    verifyInvestorUser()
      .then(investor => setInvestor(investor))
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


  const redirectLogOut = () => {  
    const newWindow = window.open('https://www.google.com/accounts/Logout');
    setTimeout(() => {
      if(newWindow) newWindow.close();
      const url = 'https://dazzling-heyrovsky-02bd75.netlify.app';
      window.open(url, '_top');
    }, 1000);

    
    // const auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(() => {
    //   console.log('User signed out.');
    // });

    
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
          redirectLogOut={redirectLogOut}
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
            exact
            component={InvestorPanel}
            activeUser={investorProfile}
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
