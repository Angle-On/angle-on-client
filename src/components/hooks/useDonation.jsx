import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDonationById } from '../../services/apiUtils';

const useDonation = () => { 
  const [donation, setDonation] = useState([]);
  const [loading, setLoading] = useState(true);
  const investor_id = useParams(); 

  useEffect(() => { 
    getDonationById(investor_id)
      .then(donation => setDonation(donation))
      .finally(() => setLoading(false));

  }, []);

  return { donation, loading };

};

export default useDonation;
