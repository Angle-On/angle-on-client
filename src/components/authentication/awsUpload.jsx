/* eslint-disable max-len */
import React, { Component, useState } from 'react';
// import UploadButton from './UploadButton';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const AWSUpload = ({ singleFileChangeHandler }) => {
  const classes = useStyles();


  return (
    <div>
      <div>
        <p>Please upload an image for your profile</p>
        <input type="file" name="image"/>
      </div>
    </div>
  );
};

export default AWSUpload; 
