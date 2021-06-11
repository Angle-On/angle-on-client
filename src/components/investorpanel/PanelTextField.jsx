/* eslint-disable max-len */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function PanelTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-helperText"
          label="First Name"
          defaultValue="Get user name"
          helperText="Some important text"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Last Name"
          defaultValue="Get user last name"
          helperText="Some important text"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Email"
          defaultValue="Get user email"
          helperText="Some important text"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </form>
  );
}



// InputLabelProps={{
//   shrink: true,
// }}
