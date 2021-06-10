import React from 'react';
import PropTypes from 'prop-types';

const Film = ({ name, image }) => { 
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt=""/>
    </div>
  );
};

Film.propTypes = { 
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired

};

export default Film;
