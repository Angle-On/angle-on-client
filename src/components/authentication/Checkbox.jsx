/* eslint-disable max-len */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VideocamIcon from '@material-ui/icons/Videocam';

const VideoCheckbox = withStyles({
  root: {
    color: blue[800],
    '&$checked': {
      color: blue[800],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup column="true">
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Documentary" checked={state.Documentary} 
          onChange={handleChange}
        />}
        label="Documentary"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Romance" checked={state.Romance} 
          onChange={handleChange}
        />}
        label="Romance"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Comedy" checked={state.Comedy} 
          onChange={handleChange}
        />}
        label="Comedy"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Horror" checked={state.Horror} 
          onChange={handleChange}
        />}
        label= "Horror"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Thriller" checked={state.Thriller} 
          onChange={handleChange}
        />}
        label="Thriller"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Drama" checked={state.Drama} 
          onChange={handleChange}
        />}
        label="Drama"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Fantasy" checked={state.Fantasy} 
          onChange={handleChange}
        />}
        label="Fantasy"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Mystery" checked={state.Mystery} 
          onChange={handleChange}
        />}
        label="Mystery"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="Western" checked={state.Western} 
          onChange={handleChange}
        />}
        label="Western"
      />
    </FormGroup>
  );
}
