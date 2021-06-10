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


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedA" checked={state.checkedA} 
          onChange={handleChange}
        />}
        label="Documentary"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedB" checked={state.checkedB} 
          onChange={handleChange}
        />}
        label="Romance"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedC" checked={state.checkedC} 
          onChange={handleChange}
        />}
        label="Comedy"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedD" checked={state.checkedD} 
          onChange={handleChange}
        />}
        label="Horror"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedE" checked={state.checkedE} 
          onChange={handleChange}
        />}
        label="Thriller"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedF" checked={state.checkedF} 
          onChange={handleChange}
        />}
        label="Drama"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedG" checked={state.checkedG} 
          onChange={handleChange}
        />}
        label="Fantasy"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedH" checked={state.checkedH} 
          onChange={handleChange}
        />}
        label="Mystery"
      />
      <FormControlLabel
        control={<VideoCheckbox icon={<VideocamOutlinedIcon />} 
          checkedIcon={<VideocamIcon />} 
          name="checkedI" checked={state.checkedI} 
          onChange={handleChange}
        />}
        label="Western"
      />
    </FormGroup>
  );
}
