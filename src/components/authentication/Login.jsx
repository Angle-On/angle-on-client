import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const Login = () => { 

  const responseGoogle = (response) => { 
    console.log(response);
    console.log(response.profileObj);
  };

  return ( 
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}/>
      <GoogleLogout
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}/>
    </div>

  );
};

export default Login;
