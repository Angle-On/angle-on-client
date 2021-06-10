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

export default Film;
