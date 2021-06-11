/* eslint-disable max-len */
import React, { useState } from 'react';
import PanelTextField from './PanelTextField'; 
// import PanelButtons from './PanelButtons'; 
import DeleteProfileButton from './DeleteProfileButton'; 
import Styles from './investor.css'; 
import DonationTable from './DonationTable'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { updateInvestorById } from '../../services/apiUtils'; 

// import useInvestor from '../hooks/useInvestor'; 

import investor from './mockinvestor'; 
import donationData from './mockdonationinfo'; 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const InvestorPanel = () => {
  const [edit, setEdit] = useState(true); 
  const classes = useStyles();

  const handleClick = () => {
    setEdit(false); 
    console.log(edit, 'in handle click'); 
    return edit; 
  }; 

  const handleUpdate = () => {
    updateInvestorById(); 
    console.log('in handle update'); 
  }; 


  return (
    <form className={Styles.investor}>
      <h1>Investor Panel</h1>
      <h1>User Information</h1>
      <PanelTextField {...investor} edit={edit} /> 
      {/* <PanelButtons />  */}
      <div className={classes.root}>
        <Button variant="contained" onClick={handleClick}>Edit</Button>
        <Button variant="contained" onClick={handleUpdate}>Update</Button>
      </div>
      <h1>Donations</h1>
      <DonationTable {...[donationData]}/> 
      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      
    </form>
  );
}; 
export default InvestorPanel;
