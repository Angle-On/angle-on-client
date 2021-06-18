/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  if(props.activeUser.loading) return null;
  if(!props.activeUser.user && !props.activeUser.loading) return <Redirect to="/" />;
  return  <Route {...props} />;
};

export default PrivateRoute;
