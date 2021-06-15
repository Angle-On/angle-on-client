/* eslint-disable max-len */
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { verifyInvestorToken } from '../../services/apiUtils';

const Login = () => { 

  async function responseGoogle(response) {
    const verify = await verifyInvestorToken(response);
    
    console.log(response);
  }


  return ( 
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        // uxMode="redirect"
        // redirectUri = 
        // "http://localhost:3000/film-application"
        // {(url === '/filmer-registration')? "http://localhost:3000/filmer-application" : "http://localhost:3000/FilmsListPage"}
      />

      <GoogleLogout
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}/>
    </div>

  );
};

export default Login;
