/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from './Checkbox'; 
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import './form.css';
import AWSUpload from './awsUpload';
import { sendFilm } from '../../services/apiUtils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const FilmerApplication = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [budget, setBudget] = useState('');
  const [trailer, setTrailer] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = React.useState({
    Documentary: false,
    Romance: false,
    Comedy: false,
    Horror: false,
    Thriller: false,
    Drama: false,
    Fantasy: false,
    Mystery: false,
    Western: false,
  });



  const handleTitleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };


  const handleImageChange = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  };


  const handleBudgetChange = (event) => {
    console.log(event.target.value);
    setBudget(event.target.value);
  };

  const handleTrailerChange = (event) => {
    console.log(event.target.value);
    setTrailer(event.target.value);
  };


  const handleDescriptionChange = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };


  const handleGenreChange = (event) => {
    setGenre({ ...genre, [event.target.name]: event.target.checked });
    console.log(event.target.name);
  };

  const handleSubmit = () => {
    const filmObj = {
      filmName: title, 
      filmImg: image, 
      filmDescription: description,
      filmBudget: budget,
      filmUrl: trailer, 
      filmGenre: genre
    };
    console.log(filmObj);
    sendFilm(filmObj); 
  }; 


  
  return (
    <div>
      <h1>Short Film Application</h1>
      <form className={classes.root}>
        <TextField id="standard-basic" label="Title" onChange={handleTitleChange}/>
        <TextField id="standard-basic" label="$ Budget" type="number" onChange={handleBudgetChange}/>
        <TextField id="standard-basic" label="Trailer URL" onChange={handleTrailerChange}/>

        <TextArea handleDescriptionChange={handleDescriptionChange} description={description}/>

        <AWSUpload handleImageChange={handleImageChange}/>
      
        <Checkbox handleGenreChange={handleGenreChange} genre={genre}/> 
        <SubmitButton handleSubmit={handleSubmit}/>
      </form>
    </div>
  );
}; 
export default FilmerApplication;
