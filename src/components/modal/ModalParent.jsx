/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    
    `;
    
const Button = styled.button`
    min-width: 150px;
    padding: 7px 14px;
    border-radius: 20px;
    border: 2px solid blue;
    backgroud: transparent;
    color: blue;
    font-size: 16px;
    cursor: pointer;

    &:hover { 
        background-color: blue;
        color: white;
        transform: scale(1.2)
    }

`;



const ModalParent = ({ films_name, films_image, films_description, films_budget, films_url, films_genre }) => { 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev); 

  };

  return (
    <>
      <Container>
        <Button onClick={openModal}> Learn More! </Button>
        <Modal 
          showModal={showModal}
          setShowModal={setShowModal}
          films_name={films_name}
          films_image={films_image}
          films_description={films_description}
          films_budget={films_budget}
          films_url={films_url}
          films_genre={films_genre}
        />
      </Container>
    </>
  );
};

ModalParent.propTypes = { 
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  films_name: PropTypes.string.isRequired,
  films_image: PropTypes.string.isRequired,
  films_description: PropTypes.string.isRequired,
  films_budget: PropTypes.number.isRequired,
  films_url: PropTypes.string.isRequired,
  films_genre: PropTypes.array.isRequired,
};

export default ModalParent;
