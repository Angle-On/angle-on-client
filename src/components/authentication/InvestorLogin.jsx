/* eslint-disable max-len */
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { verifyInvestorToken } from '../../services/apiUtils';
// import { useLocation } from 'react-router';




const InvestorLogin = () => { 

  async function responseGoogle(response) {
    const verify = await verifyInvestorToken(response);
    
    console.log(response);
  }


  return ( 
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID2}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        uxMode="redirect"
        redirectUri="http://localhost:3000/investor-panel"
      />

      <GoogleLogout
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID2}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}/>
    </div>

  );
};

export default InvestorLogin;
