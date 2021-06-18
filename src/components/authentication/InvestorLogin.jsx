/* eslint-disable max-len */
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { verifyInvestorToken } from '../../services/apiUtils';
import { useHistory } from 'react-router';




const InvestorLogin = () => { 
  
  const history = useHistory();
  
  async function responseGoogle(response) {
    (response, 'response from google'); 

    const verify = await verifyInvestorToken(response)
      .then(() => history.push({ pathname:'/investor-panel' }));
    
    console.log(verify, 'this is the verify');     
  }



  return ( 
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Investor Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>

  );
};

export default InvestorLogin;
