/* eslint-disable max-len */
import React, { useState } from 'react';
import PanelTextField from './PanelTextField'; 
// import PanelButtons from './PanelButtons'; 
import DeleteProfileButton from './DeleteProfileButton'; 
import Styles from './investor.css'; 
import FilmerSubmissionTable from './FilmerSubmissionTable'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { updateInvestorById } from '../../services/apiUtils'; 
import FilmData from '../../components/films/mockDataFilm'; 


// import useInvestor from '../hooks/useInvestor'; 

import filmer from './mockfilmer'; 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const FilmerPanel = () => {
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
      <h1>Filmer Panel</h1>
      <h1>User Information</h1>
      <PanelTextField {...filmer} edit={edit} /> 
      {/* <PanelButtons />  */}
      <div className={classes.root}>
        <Button variant="contained" onClick={handleClick}>Edit</Button>
        <Button variant="contained" onClick={handleUpdate}>Update</Button>
      </div>
      <h1>Short Film Submissions</h1>
      <FilmerSubmissionTable {...[FilmData]}/> 
      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      
    </form>
  );
}; 
export default FilmerPanel;
