/* eslint-disable max-len */
import React from 'react';
import PanelTextField from './PanelTextField'; 
import PanelButtons from './PanelButtons'; 
import DeleteProfileButton from './DeleteProfileButton'; 
import Styles from './investor.css'; 
import DonationTable from './DonationTable'; 

// import useInvestor from '../hooks/useInvestor'; 
// import useDonation from '../hooks/useDonation'; 

import investor from './mockinvestor'; 
import donationData from './mockdonationinfo'; 


const InvestorPanel = () => {
  console.log(investor, 'from panel page');
  console.log(donationData, 'from panel page'); 

  return (
    <form className={Styles.investor}>
      <h1>Investor Panel</h1>
      <h1>User Information</h1>
      <PanelTextField {...investor} /> 
      <PanelButtons /> 
      <h1>Donations</h1>
      <br></br>
      <br></br>
      <DonationTable {...[donationData]}/> 
      <br></br>
      <br></br>

      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      
    </form>
  );
}; 
export default InvestorPanel;
