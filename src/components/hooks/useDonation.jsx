import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDonationById } from '../../services/apiUtils';
import Spinner from '../spinner/Spinner';

const useDonation = () => { 
  const [donation, setDonation] = useState([]);
  const [loading, setLoading] = useState(true);
  const investor_id = useParams(); 

  useEffect(() => { 
    getDonationById(investor_id)
      .then(donation => setDonation(donation))
      .finally(() => setLoading(false));

  }, []);

  if(loading) return <Spinner />;
  return { donation, loading };

};

export default useDonation;
