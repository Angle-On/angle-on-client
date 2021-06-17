import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PanelButtons() {
  const classes = useStyles();

  const handleClick = () => {
    return true; 
  }; 

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={handleClick}>Edit</Button>
      <Button variant="contained">Update</Button>
    </div>
  );
}
