/* eslint-disable max-len */
import React from 'react';
import SocialButtons from '../socialbuttons/SocialButtons';
import { FilmImage, Underline } from './FilmElements';
import PropTypes from 'prop-types';
import ModalParent from '../modal/ModalParent';
import { FilmContainer } from './FilmElements';
import MediaCard from './MediaCard';




const Film = ({ films_name, films_image,
  films_description,
  films_budget, films_url,
  films_genre, director_first_name,
  director_last_name, director_id,
  films_id }) => {
  return (
    <MediaCard
      films_id={films_id}
      films_name={films_name}
      films_image={films_image}
      films_description={films_description}
      films_budget={films_budget}
      films_url={films_url}
      films_genre={films_genre}
      director_name={director_id}
      director_first_name={director_first_name}
      director_last_name={director_last_name}
    />

  // <FilmContainer>

  //   <h2>{films_name}</h2>
  //   <Underline></Underline>
  //   <h4>Created by: {director_first_name} {director_last_name}</h4>
  //   <FilmImage src={films_image} alt={films_name}/>
  //   {/* <div> Genre Categories: {films_genre.map(genre => <div key={genre}>
  //     <p>{genre}</p>
  //   </div>)}
  //   </div>  */}
  //   <p>{films_description.substring(0, 60)}...</p>
  //   <ModalParent
  //     films_id={films_id}
  //     films_name={films_name}
  //     films_image={films_image}
  //     films_description={films_description}
  //     films_budget={films_budget}
  //     films_url={films_url}
  //     films_genre={films_genre}
  //     director_name={director_id}
  //     director_first_name={director_first_name}
  //     director_last_name={director_last_name}
  //   />
  //   <SocialButtons></SocialButtons>
  // </FilmContainer>
      
  );
};

Film.propTypes = { 
  films_name: PropTypes.string.isRequired,
  films_image: PropTypes.string.isRequired,
  films_description: PropTypes.string.isRequired,
  films_budget: PropTypes.number.isRequired,
  films_url: PropTypes.string.isRequired,
  films_genre: PropTypes.array.isRequired,
  director_name: PropTypes.string.isRequired,
  director_first_name: PropTypes.string.isRequired,
  director_last_name: PropTypes.string.isRequired,
  director_id: PropTypes.number.isRequired, 
  films_id: PropTypes.number.isRequired
  

};

export default Film;
