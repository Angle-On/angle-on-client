import React from 'react';
import useFilms from '../hooks/useFilms';
import Film from '../films/Film';
import { ShortFilms } from './FilmElements';
import SearchBox from '../search/SearchBox'; 
import Spinner from '../spinner/Spinner';
import './films.css';

const FilmsListPage = () => { 

  const { films, loading } = useFilms();

  const shortFilms = films.map(film => (<li key={film.films_id}>
    <Film {...film}/>
  </li>));


    
  if(loading) return <Spinner />;
  return (<div>
    <ShortFilms>
      {shortFilms}
    </ShortFilms>
  </div>
  );
};

export default FilmsListPage;

