/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';
import { Container, Button } from './ModalStyling';




const ModalParent = ({ films_name,
  films_image,
  films_description,
  films_budget,
  films_url, films_genre,
  director_name,
  films_id
}) => { 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev); 

  };

  return (
    <>
      <Container>
        <Button onClick={openModal}> Learn More! </Button>
        <Modal
          films_id={films_id} 
          showModal={showModal}
          setShowModal={setShowModal}
          films_name={films_name}
          films_image={films_image}
          films_description={films_description}
          films_budget={films_budget}
          films_url={films_url}
          films_genre={films_genre}
          director_name={director_name}
        />
      </Container>
    </>
  );
};

ModalParent.propTypes = { 
  films_name: PropTypes.string.isRequired,
  films_image: PropTypes.string.isRequired,
  films_description: PropTypes.string.isRequired,
  films_budget: PropTypes.number.isRequired,
  films_url: PropTypes.string.isRequired,
  films_genre: PropTypes.array.isRequired,
  director_name: PropTypes.string.isRequired
};

export default ModalParent;
