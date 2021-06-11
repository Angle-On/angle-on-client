import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deleteInvestorById } from '../../services/apiUtils'; 
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DeleteProfileButton() {
  const classes = useStyles();
  
  //find out how to get investor id - not sure this will work 
  const id = useParams(); 

  const handleClick = (e) => {
    e.preventDefault(); 
    if(confirm('Profile will be permanently deleted. Are you sure?')) {
      deleteInvestorById(id);
      console.log('confirmed delete'); 
    }
    // console.log('in handle click'); 
  }; 

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Delete Profile
      </Button>
    </div>
  );
}
