import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from './Checkbox'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FilmerApplication = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Title" />
      <TextField id="standard-basic" label="Directors Name" />
      <TextField id="standard-basic" label="Short Film Length (est)" />
      <TextField id="standard-basic" label="Standard" />
      <Checkbox /> 
    </form>
  );
}; 
export default FilmerApplication;
