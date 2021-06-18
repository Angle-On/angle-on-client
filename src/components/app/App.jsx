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
import DonationForm from '../stripe/DonationForm';
import './App.css';
import ModalParent from '../modal/ModalParent';
import {
  verifyDirectorUser,
  verifyInvestorUser,
} from '../../services/apiUtils';
// import { gapi } from 'gapi-script';
import PrivateRoute from './PrivateRoute';

export default function App() {
  const [director, setDirector] = useState(null);
  const [investor, setInvestor] = useState(null);
  const [loadingInvestor, setLoadingInvestor] = useState(true);
  const [loadingDirector, setLoadingDirector] = useState(true);
  const directorProfile = { user:director, loading: loadingDirector };
  const investorProfile = { user:investor, loading: loadingInvestor };

  useEffect(() => {
    verifyDirectorUser()
      .then((director) => setDirector(director))
      .finally(() => setLoadingDirector(false));
  }, []);

  useEffect(() => {  
    verifyInvestorUser()
      .then((investor) => setInvestor(investor))
      .finally(() => setLoadingInvestor(false));
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
      if (newWindow) newWindow.close();
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
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/filmer-registration"
            exact
            component={FilmerRegistration}
          />
          <PrivateRoute
            path="/filmer-application"
            exact
            component={FilmerApplication}
            activeUser={directorProfile}
          />
          <Route
            path="/investor-registration"
            exact
            component={InvestorRegistration}
          />
          <Route path="/films" exact component={FilmsListPage} />
          <Route path="/resources" exact component={ResourcesPage} />
          <PrivateRoute
            path="/filmer-panel"
            exact
            render={() => <FilmerPanel user={directorProfile}/>}
            activeUser={directorProfile}
          />
          <PrivateRoute
            path="/investor-panel"
            exact
            render={() => <InvestorPanel user={investorProfile}/>}
            activeUser={investorProfile}
          />
          <Route path="/about-us" exact component={About} />
          <Route path="/modal" exact component={ModalParent} />
          <PrivateRoute
            path="/donation/:filmId"
            exact
            component={DonationForm}
            activeUser={investorProfile}
          />
        </Switch>
      </Router>
    </>
  );
}
