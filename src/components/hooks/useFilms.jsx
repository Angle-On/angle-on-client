import { useEffect, useState } from 'react';
import { getFilms } from '../../services/apiUtils';

const useFilms = () => { 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => { 
    getFilms()
      .then(films => setFilms(films))
      .finally(() => setLoading(false));

  }, []);

  const handleGenreSearch = (e) => { 
    console.log(e.target.value);
    setSearch(e.target.value);
  };


  // const filteredFilms = films.filter(film => {
  //   return film.films_genre.toLowerCase().includes(search.toLowerCase());
  // });

  return { films, loading, search, handleGenreSearch };
  // filteredFilms

};

export default useFilms;
