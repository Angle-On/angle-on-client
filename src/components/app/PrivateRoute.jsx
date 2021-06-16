/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  // if(rest.loading) return null;
  if(!props.profile.user && !props.profile.loading) return <Redirect to="/" />;
  console.log(props.profile.user);
  return  <Route {...props} />;
};

export default PrivateRoute;
