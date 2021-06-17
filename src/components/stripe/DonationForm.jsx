/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { sendDonation } from '../../services/apiUtils';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const DonationForm = (state) => { 
  const classes = useStyles();
  const [budget, setBudget] = useState('');

  const filmId = state.location.state[0];

  const handleDonationChange = (event) => {
    console.log(budget, setBudget);
    setBudget(event.target.value);
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(typeof(budget));
    //films_id, budget, investor_id
    sendDonation(budget, filmId);

  };


  return (
    <div>
      <h1>Make a Donation</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="filmDonation"
          id="standard-basic"
          label="$ Donation"
          type="number"
          onChange={handleDonationChange}
        />
        <button>Donate!</button>
      </form>
    </div>
  );

};

export default DonationForm;