import React from 'react';
import useFilms from '../hooks/useFilms';
import Film from '../films/Film';

const FilmsListPage = () => { 

  const { films, loading } = useFilms();

  const shortFilms = films.map(film => (<li key={film.id}>
    <Film {...film}/>
  </li>));
        
    
  if(loading) return <h2>Loading...</h2>;
  return ( 
    <div>
      {shortFilms}
    </div>
  );
};

export default FilmsListPage;

