/* eslint-disable max-len */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function PanelTextField({ first_name, last_name, email, edit },) {
  const classes = useStyles();
  console.log(edit, 'in panel buttons');
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="outlined-helperText"
        label="First Name"
        defaultValue={first_name}
        // helperText="Some important text"
        variant="outlined"
        InputProps={{
          readOnly: edit,
        }}
      />
      <TextField
        required
        id="outlined-helperText"
        label="Last Name"
        defaultValue={last_name}
        // helperText="Some important text"
        variant="outlined"
        InputProps={{
          readOnly: edit,
        }}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Email"
        defaultValue={email}
        variant="outlined"
      />

    </div>
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
