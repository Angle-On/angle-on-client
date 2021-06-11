/* eslint-disable max-len */
import React from 'react';
import PanelTextField from './PanelTextField'; 
import PanelButtons from './PanelButtons'; 
import DeleteProfileButton from './DeleteProfileButton'; 


const InvestorPanel = () => {

  return (
    <>
      <h1>Investor Panel</h1>
      <h1>User Information</h1>
      <PanelTextField /> 
      <PanelButtons /> 
      <h1>Donations</h1>
      <br></br>
      <br></br>
      <h3>table here</h3>
      <br></br>
      <br></br>

      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      
    </>
  );
}; 
export default InvestorPanel;
