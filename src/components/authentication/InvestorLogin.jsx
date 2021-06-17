/* eslint-disable max-len */
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { verifyInvestorToken } from '../../services/apiUtils';




const InvestorLogin = () => { 

  async function responseGoogle(response) {
    console.log(response, 'response from google'); 

    const verify = await verifyInvestorToken(response);

    console.log(verify, 'this is the verify');   
    console.log('in verify');  
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
        // redirectUri="https://dazzling-heyrovsky-02bd75.netlify.app/investor-panel"
      />
    </div>

  );
};

export default InvestorLogin;
