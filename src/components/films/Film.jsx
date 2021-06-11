import React from 'react';
import PropTypes from 'prop-types';
import styles from './films.css';

const Film = ({ name, image }) => { 
  return (
    <ul className={styles.ul}>
      <li><p>{name}</p></li>
      <li><img src={image} alt=""/></li>
    </ul>
  );
};

Film.propTypes = { 
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired

};

export default Film;
