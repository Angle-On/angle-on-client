/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from './Checkbox'; 
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import './form.css';
import { sendFilm } from '../../services/apiUtils';
import axios from 'axios';

//aws
import AWSUpload from './awsUpload';
import {LocalConvenienceStoreOutlined} from '@material-ui/icons';
// import { singleFileUploadHandler } from '../../services/awsUtils';


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

  const singleFileChangeHandler = (event) => {
    const imageFile = event.target.files[0];
    console.log(imageFile);
    setSelectedImageFile(imageFile);
  };

  // const singleUploadHandler = (event) => {
  //   console.log(selectedImageFile, 'selected image file'); 
  //   const data = new FormData(); // If file selected
  //   if (selectedImageFile) {
  //     data.append('image', selectedImageFile, selectedImageFile.name);
  //     axios
  //       .post('http://localhost:7890/api/v1/images/img-upload', data, {
  //         headers: {
  //           accept: 'application/json',
  //           'Accept-Language': 'en-US,en;q=0.8',
  //           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  //         },
  //       })
  //       .then((response) => {
  //         if (200 === response.status) {
  //           // If file size is larger than expected.
  //           if (response.data.error) {
  //             if ('LIMIT_FILE_SIZE' === response.data.error.code) {
  //               console.log('error');
  //             } else {
  //               console.log(response.data); // If not the given file type
  //             }
  //           } else {
  //             // Success
  //             const fileName = response.data;
  //             console.log('HELLO FILENAME', fileName);
  //             setAwsFile(fileName); 

  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     // if file not selected throw error
  //     console.log('no file detected');
  //   }
  // };


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

  const handleSubmit = async () => {
    console.log(selectedImageFile, 'selected image file'); 
    const data = new FormData(); // If file selected
    if (selectedImageFile) {
      data.append('image', selectedImageFile, selectedImageFile.name);
      data.append('filmName', title);
      data.append('filmBudget', budget);
      data.append('filmUrl', trailer);
      data.append('filmGenre', genre);
      // console.log(data.values);
      axios
      //change name
        .post('http://localhost:7890/api/v1/images/img-upload', data, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          },
        })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                console.log('error');
              } else {
                console.log(response.data); // If not the given file type
              }
            } else {
              // Success
              const fileName = response.data;
              console.log('HELLO FILENAME', fileName);
              setAwsFile(fileName); 

            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // if file not selected throw error
      console.log('no file detected');
    }
    // const filmObj = {
    //   filmName: title, 
    //   filmDescription: description,
    //   filmBudget: budget,
    //   filmUrl: trailer, 
    //   filmGenre: genre,
    // };
    // console.log(filmObj);
    // await sendFilm(filmObj); 
  }; 



  
  return (
    <div>
      <h1>Short Film Application</h1>
      <form className={classes.root}>
        <TextField id="standard-basic" label="Title" onChange={handleTitleChange}/>
        <TextField id="standard-basic" label="$ Budget" type="number" onChange={handleBudgetChange}/>
        <TextField id="standard-basic" label="Trailer URL" onChange={handleTrailerChange}/>

        <TextArea handleDescriptionChange={handleDescriptionChange} description={description}/>

        <AWSUpload 
          singleFileChangeHandler={singleFileChangeHandler}
          // singleUploadHandler={singleUploadHandler}
          selectedFile={selectedImageFile}
        />
      
        <Checkbox handleGenreChange={handleGenreChange} genre={genre}/> 
        <SubmitButton handleSubmit={handleSubmit}/>
      </form>
    </div>
  );
}; 
export default FilmerApplication;
