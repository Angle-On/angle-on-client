/* eslint-disable max-len */
import React from 'react';
import InvestorPanelTextField from './InvestorPanelTextField'; 
import DeleteProfileButton from './DeleteProfileButton'; 
import DonationTable from './DonationTable'; 

import investor from './mockinvestor';
// import useInvestor from '../hooks/useInvestor'; 
// import donationData from './mockdonationinfo'; 

const InvestorPanel = () => {

  return (
    <>
      <h1>Investor Panel</h1>
      <h1>User Information</h1>
      <InvestorPanelTextField {...investor} /> 
      <h1>Donations</h1>
      <DonationTable/> 
      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      
    </>
  );
}; 
export default InvestorPanel;
