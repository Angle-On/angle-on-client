import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFilmerById } from '../../services/apiUtils';
import Spinner from '../spinner/Spinner';

const useFilmer = () => { 
  const [filmer, setFilmer] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = useParams(); 

  useEffect(() => { 
    getFilmerById(id)
      .then(filmer => setFilmer(filmer))
      .finally(() => setLoading(false));

  }, []);

  if(loading) return <Spinner />;
  return { filmer, loading };

};

export default useFilmer;
