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
    setSearch(e.target.value);
  };


  return { films, loading, search, handleGenreSearch };


};

export default useFilms;
