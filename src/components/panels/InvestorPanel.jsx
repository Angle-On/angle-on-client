/* eslint-disable max-len */
import React, {useEffect, useState } from 'react';
import InvestorPanelTextField from './InvestorPanelTextField'; 
import DeleteProfileButton from './DeleteProfileButton'; 
import DonationTable from './DonationTable'; 

// import investor from './mock-data/mockinvestor';
// import useInvestor from '../hooks/useInvestor'; 
// import donationData from './mockdonationinfo'; 

const InvestorPanel = ({ user }) => {
  console.log(user); 

  return (
    <>
      <h1>Investor Panel</h1>
      <h1>User Information</h1>
      <InvestorPanelTextField /> 
      <h1>Donations</h1>
      <DonationTable user={user} /> 
      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      <button onClick={() => window.location.replace('/films')}>Discover New Talent!</button>
      
    </>
  );
}; 
export default InvestorPanel;
