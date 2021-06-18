import React from 'react';
import { verifyDirectorToken } from '../../services/apiUtils';


const Logout = () => { 
  async function responseGoogle(response) {
    const verify = await verifyDirectorToken(response);    
    console.log(verify);
  }



    


  return (
    <div>
        <a href="https://accounts.google.com/Logout?continue=https%3A%2F%2Fappengine.google.com%2F_ah%2Flogout%3Fcontinue%3D%5Bhttp%3A%2F%2Fwww.https://dazzling-heyrovsky-02bd75.netlify.app/">Logout</a>
    </div>);
};

export default Logout;
