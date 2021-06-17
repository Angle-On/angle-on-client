import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getInvestorById } from '../../services/apiUtils';

const useInvestor = () => { 
  const [investor, setInvestor] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = useParams(); 

  useEffect(() => { 
    getInvestorById(id)
      .then(investor => setInvestor(investor))
      .finally(() => setLoading(false));

  }, []);

  return { investor, loading };

};

export default useInvestor;
