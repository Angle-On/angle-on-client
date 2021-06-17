import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { verifyDirectorToken } from '../../services/apiUtils';


const Logout = () => { 
  async function responseGoogle(response) {
    const verify = await verifyDirectorToken(response);
        
    console.log(verify);
  }
    


  return (
    <div>
      <GoogleLogout
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}
        uxMode="redirect"
        redirectUri="https://dazzling-heyrovsky-02bd75.netlify.app"
      />
    </div>);
};

export default Logout;
