import React from 'react';
import useFilms from '../hooks/useFilms';
import Film from '../films/Film';
import { ShortFilms } from './FilmElements';
import SearchBox from '../search/SearchBox'; 
import './films.css';

const FilmsListPage = () => { 

  const { films, loading } = useFilms();

  const shortFilms = films.map(film => (<li key={film.films_id}>
    <Film {...film}/>
  </li>));


    
  if(loading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
  return (<div>
    <ShortFilms>
      {shortFilms}
    </ShortFilms>
  </div>
  );
};

export default FilmsListPage;

