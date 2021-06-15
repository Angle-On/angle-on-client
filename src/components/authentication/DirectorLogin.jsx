/* eslint-disable max-len */
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { verifyDirectorToken } from '../../services/apiUtils';
// import { useLocation } from 'react-router';




const DirectorLogin = () => { 


  async function responseGoogle(response) {
    const verify = await verifyDirectorToken(response);
    
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
        uxMode="redirect"
        redirectUri="http://localhost:3000/filmer-panel"
      />

      <GoogleLogout
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}/>
    </div>

  );
};

export default DirectorLogin;
