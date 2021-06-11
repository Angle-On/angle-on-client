import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '../authentication/Checkbox'; 
import SubmitButton from '../authentication/SubmitButton';
import TextArea from '../authentication/TextArea';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FilmerPanel = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Filmer Panel</h1>
      <form className={classes.root}>
        <TextField id="standard-basic" label="Title" />
        <TextField id="standard-basic" label="Directors Name" />
        <TextField id="standard-basic" label="$ Budget" />
        <TextField id="standard-basic" label="Trailer URL" />
        <TextArea />
        {/* image uploader*/}
        <Checkbox /> 
        <SubmitButton />
      </form>
    </>
  );
}; 
export default FilmerPanel;
