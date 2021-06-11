/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Film = ({ films_name, films_image, films_description, films_budget, films_url, films_genre }) => { 
  console.log(films_image); 
  return (
    <div>
      <p>{films_name}</p>
      <img src={films_image} alt={films_name}/>
      <p>{films_description}</p>
      <p>{films_budget}</p>
      <p>{films_url}</p>
      <p>{films_genre}</p>
    </div>
  );
};

Film.propTypes = { 
  films_name: PropTypes.string.isRequired,
  films_image: PropTypes.string.isRequired,
  films_description: PropTypes.string.isRequired,
  films_budget: PropTypes.number.isRequired,
  films_url: PropTypes.string.isRequired,
  films_genre: PropTypes.array.isRequired,

};

export default Film;
