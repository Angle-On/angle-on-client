/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from './Checkbox'; 
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import './form.css';
import axios from 'axios';
import AWSUpload from './awsUpload';
import { AllInclusiveRounded } from '@material-ui/icons';


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
  const [budget, setBudget] = useState('');
  const [trailer, setTrailer] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState(''); 
  const [awsFile, setAwsFile] = useState(''); 
  const [data, setData] = useState({});  

  const [genre, setGenre] = useState({
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
    setTitle(event.target.value);
  };

  const singleFileChangeHandler = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImageFile(imageFile);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleTrailerChange = (event) => {
    setTrailer(event.target.value);
  };


  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  const handleGenreChange = (event) => {
    console.log(genre, 'GENRE');
    setGenre({ ...genre, [event.target.name]: event.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedImageFile, 'selected image file'); 
    const data = new FormData(e.target); // If file selected
    if(true) {
      // data.append('image', selectedImageFile, selectedImageFile.name);
      // data.append('filmName', title);
      // data.append('filmBudget', budget);
      // data.append('filmUrl', trailer);
      // data.append('filmGenre', JSON.stringify(genre));
      // data.append('filmDescription', description);
      console.log(data, 'WHY ARE YOU EMPTY');
      
      const DEVURL = 'https://angle-on.herokuapp.com';
      const localURL = 'http://localhost:7890';
      const URL = DEVURL;
      // axios
      // axios.defaults.withCredentials = true
      fetch(`${URL}/api/v1/films`, {
        method: 'POST',
        // headers: {
        //   'Accept-Language': 'en-US,en;q=0.8',
        //   'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        // },
        body: data,
        // withCredentials: true,
      })
        .then((response) => {
          if(200 === response.status) {
            if(response.data.error) {
              if('LIMIT_FILE_SIZE' === response.data.error.code) {
                console.log('error');
              } else {
                console.log(response.data); 
              }
            } else {
              const fileName = response.data;
              console.log('HELLO FILENAME', fileName);
              setAwsFile(fileName); 

            }
          }
        })
        .finally(setData(data))
        .catch((error) => {
          console.log(setData, 'SETDATA');
          console.log(error);
        });
    } else {
      console.log('no file detected');
    }
    // window.location.replace('/filmer-panel');
  }; 



  
  return (
    <div>
      <h1>Short Film Application</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField name="filmName" id="standard-basic" label="Title" onChange={handleTitleChange}/>
        <TextField name="filmBudget" id="standard-basic" label="$ Budget" type="number" onChange={handleBudgetChange}/>
        <TextField name="filmUrl" id="standard-basic" label="Trailer URL" onChange={handleTrailerChange}/>
        <TextArea name="filmDescription" handleDescriptionChange={handleDescriptionChange} description={description}/>

        {/* <AWSUpload 
          singleFileChangeHandler={singleFileChangeHandler}
          selectedFile={selectedImageFile}
        /> */}
        <input type="file" name="image"></input>
      
        <Checkbox handleGenreChange={handleGenreChange} genre={genre}/> 
        <SubmitButton/>
      </form>
    </div>
  );
}; 
export default FilmerApplication;

