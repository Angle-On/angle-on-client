import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from './Checkbox'; 
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import UploadButton from './UploadButton';
import './form.css';



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
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  
  return (
    <form className={classes.root}>
      <TextField id="standard-basic" label="Title" onChange={handleChange}/>
      <TextField id="standard-basic" label="Directors Name" onChange={handleChange}/>
      <TextField id="standard-basic" label="$ Budget" onChange={handleChange}/>
      <TextField id="standard-basic" label="Trailer URL" onChange={handleChange}/>
      <TextArea />
      <UploadButton/>
      <Checkbox /> 
      <SubmitButton />
    </form>
  );
}; 
export default FilmerApplication;
