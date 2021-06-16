/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  // if(rest.loading) return null;
  console.log(props);
  if(!props.activeUser.user.id && !props.activeUser.loading) return <Redirect to="/" />;
  return  <Route {...props} />;
};

export default PrivateRoute;
