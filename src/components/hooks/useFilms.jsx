import { useEffect, useState } from 'react';
import getCharacters from '../../services/apiUtils';

const useFilms = () => { 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getCharacters()
      .then(films => setFilms(films))
      .finally(() => setLoading(false));

  }, []);

  return { films, loading };

};

export default useFilms;
