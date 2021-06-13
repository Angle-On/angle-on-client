import React from 'react';
import useFilms from '../hooks/useFilms';
import Film from '../films/Film';
import styles from './films.css';

const FilmsListPage = () => { 

  const { films, loading } = useFilms();

  const shortFilms = films.map(film => (<li key={film.films_id}>
    <Film {...film}/>
  </li>));
        
    
  if(loading) return <h2>Loading...</h2>;
  return ( 
    <div className={styles.shortFilms}>
      {shortFilms}
    </div>
  );
};

export default FilmsListPage;

