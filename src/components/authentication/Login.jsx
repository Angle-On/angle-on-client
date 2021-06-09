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
        clientId="780582464161-06hdton6je6o0uu485f0rtbdej7rnvf5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}/>
      <GoogleLogout
        clientId="780582464161-06hdton6je6o0uu485f0rtbdej7rnvf5.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}/>
    </div>

  );
};

export default Login;
