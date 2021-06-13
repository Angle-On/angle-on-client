import { useEffect, useState } from 'react';
import { getFilmsById } from '../../services/apiUtils';

const useFilmsById = () => { 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getFilmsById()
      .then(films => setFilms(films))
      .finally(() => setLoading(false));

  }, []);

  return { films, loading };

};

export default useFilmsById;
