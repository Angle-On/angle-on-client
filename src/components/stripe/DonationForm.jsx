/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { sendDonation } from '../../services/apiUtils';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { CardElement } from '@stripe/react-stripe-js';

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

// const CARD_OPTIONS = {
//   iconStyle: 'solid',
//   style: {
//     base: {
//       iconColor: '#c4f0ff',
//       color: '#fff',
//       fontWeight: 500,
//       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//       fontSize: '16px',
//       fontSmoothing: 'antialiased',
//       ':-webkit-autofill': {
//         color: '#fce883'
//       },
//       '::placeholder': {
//         color: '#87bbfd'
//       }
//     },
//     invalid: {
//       iconColor: '#ffc7ee',
//       color: '#ffc7ee'
//     }
//   }
// };

const DonationForm = () => { 
  const history = useHistory();
  const classes = useStyles();
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');

  const { filmId } = useParams();

  const handleDonationChange = (event) => {
    console.log(budget, setBudget);
    setBudget(event.target.value);

  };

  const handleNameChange = (e) => { 
    setName(e.target.value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    console.log(typeof(budget), 'budget');
    //films_id, budget, investor_id
    console.log(filmId);
    await sendDonation(budget, filmId)
      .then(() => alert(`Thank you ${name} for your donation!`))
      .finally(() => history.push({ pathname:'/investor-panel' }));

  };

  
  
  return (
    <div>
      <h1>Make a Donation</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="Name"
          id="standard-basic"
          label="Full Name"
          type="text"
          onChange={handleNameChange}
        />
        <TextField
          name="filmDonation"
          id="standard-basic"
          label="$ Donation"
          type="number"
          onChange={handleDonationChange}
        />
        <CardElement/>
        <button>Donate!</button>
      </form>
    </div>
  );

};

export default DonationForm;
