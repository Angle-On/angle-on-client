import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { verifyDirectorToken } from '../../services/apiUtils';


const Logout = () => { 
  async function responseGoogle(response) {
    const verify = await verifyDirectorToken(response);
    // .then(() => window.location.replace('/'));
        
    console.log(verify);
  }


// const Logout = () => { 
//     async function responseGoogle(response) {
//       await verifyDirectorToken(response)
//           .then(() => window.location.replace('/'));
          
//       console.log(verify);
//     }
    


  return (
    <div>
        <a href="https://accounts.google.com/Logout?continue=https%3A%2F%2Fappengine.google.com%2F_ah%2Flogout%3Fcontinue%3D%5Bhttp%3A%2F%2Fwww.https://dazzling-heyrovsky-02bd75.netlify.app/">Logout</a>
      {/* <GoogleLogout
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}
        uxMode="redirect"
        redirectUri="https://dazzling-heyrovsky-02bd75.netlify.app"
      /> */}
    </div>);
};

export default Logout;
