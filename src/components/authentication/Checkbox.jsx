/* eslint-disable max-len */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VideocamIcon from '@material-ui/icons/Videocam';

const VideoCheckbox = withStyles({
  //change colors of checkbox
  root: {
    color: blue[800],
    '&$checked': {
      color: blue[800],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


export default function CheckboxLabels({ handleGenreChange, genre }) {

  return (
    <FormGroup column="true">
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Documentary" checked={genre.Documentary} 
          onChange={handleGenreChange}
        />}
        label="Documentary"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Romance" checked={genre.Romance} 
          onChange={handleGenreChange}
        />}
        label="Romance"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Comedy" checked={genre.Comedy} 
          onChange={handleGenreChange}
        />}
        label="Comedy"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Horror" checked={genre.Horror} 
          onChange={handleGenreChange}
        />}
        label= "Horror"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Thriller" checked={genre.Thriller} 
          onChange={handleGenreChange}
        />}
        label="Thriller"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Drama" checked={genre.Drama} 
          onChange={handleGenreChange}
        />}
        label="Drama"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Fantasy" checked={genre.Fantasy} 
          onChange={handleGenreChange}
        />}
        label="Fantasy"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Mystery" checked={genre.Mystery} 
          onChange={handleGenreChange}
        />}
        label="Mystery"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Western" checked={genre.Western} 
          onChange={handleGenreChange}
        />}
        label="Western"
      />
    </FormGroup>
  );
}
