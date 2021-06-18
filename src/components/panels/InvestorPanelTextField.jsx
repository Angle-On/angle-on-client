/* eslint-disable max-len */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'; 
import { updateInvestorById } from '../../services/apiUtils'; 
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    }
  }
}));


export default function PanelTextField({ user }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(true); 
  
  const [firstName, setFirstName] = useState(user.user.firstName); 
  const [lastName, setLastName] = useState(user.user.lastName); 

  const { id } = user.user.investorId; 

  const handleClick = () => {
    setEdit(false); 
    return edit; 
  };  

  const handleFirstChange = (e) => { 
    setFirstName(e.target.value); 
  
  };
  
  const handleLastChange = (e) => { 
    setLastName(e.target.value); 
  };

  const handleUpdate = () => {

    updateInvestorById(id, { first_name: firstName, last_name: lastName }); 
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div >
        <TextField
          required
          id="outlined-helperText"
          label="First Name"
          defaultValue={firstName}
          onChange={handleFirstChange}
          variant="outlined"
          InputProps={{
            readOnly: edit,
          }}
        />
        <TextField
          required
          id="outlined-helperText"
          label="Last Name"
          defaultValue={lastName}
          onChange={handleLastChange}
          variant="outlined"
          InputProps={{
            readOnly: edit,
          }}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Email"
          defaultValue={user.user.email}
          variant="outlined"
        />
        <div className={classes.button}>
          <Button variant="contained" onClick={handleClick}>Edit</Button>
          <Button variant="contained" onClick={handleUpdate}>Update</Button>
        </div>

      </div>
    </form>
  );
}

PanelTextField.propTypes = { 
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  edit: PropTypes.boolean
};


// InputLabelProps={{
//   shrink: true,
// }}
