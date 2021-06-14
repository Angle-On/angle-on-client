/* eslint-disable max-len */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'; 
import { updateFilmerById } from '../../services/apiUtils'; 
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';



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


export default function PanelTextField({ first_name, last_name, email }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(true); 

  const [firstName, setFirstName] = useState(); 
  const [lastName, setLastName] = useState(); 

  const { id } = useParams(); 

  const handleClick = () => {
    setEdit(false); 
    console.log(edit, 'in handle click'); 
    return edit; 
  };  

  const handleFirstChange = (e) => { 
    setFirstName(e.target.value); 
  
  };
  
  const handleLastChange = (e) => { 
    setLastName(e.target.value); 
  };

  const handleUpdate = () => {

    updateFilmerById(id, { first_name: firstName, last_name: lastName }); 
    console.log('in handle update'); 
  };


  console.log(edit, 'in panel buttons');
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div >
        <TextField
          required
          id="outlined-helperText"
          label="First Name"
          defaultValue={first_name}
          onChange={handleFirstChange}
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
          onChange={handleLastChange}
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
