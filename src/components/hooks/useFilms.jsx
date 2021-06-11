import { useEffect, useState } from 'react';
import { getFilms } from '../../services/apiUtils';

const useFilms = () => { 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getFilms()
      .then(films => setFilms(films))
      .finally(() => setLoading(false));

  }, []);

  return { films, loading };

};

export default useFilms;
