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
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID2}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}/>
    </div>);
};

export default Logout;
