/* eslint-disable max-len */
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { verifyDirectorToken } from '../../services/apiUtils';
// import { useLocation } from 'react-router';




const DirectorLogin = () => { 

  async function responseGoogle(response) {
    const verify = await verifyDirectorToken(response);
    
    console.log(verify, 'CAN YOU SEE THIS');
    console.log('CAN YOU SEE THIS');

  }

  




  return ( 
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Director Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        uxMode="redirect"
        redirectUri="https://dazzling-heyrovsky-02bd75.netlify.app/filmer-panel"
      />
      {/* <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        render={renderProps => (
           <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Director Login</button>
          // <button onClick={renderProps.onClick}>Director Login</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
    </div>
  );
};

export default DirectorLogin;
