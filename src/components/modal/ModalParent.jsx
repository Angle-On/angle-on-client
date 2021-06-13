/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    
    `;
    
const Button = styled.button`
    min-width: 100px;
    padding: 7px 14px;
    border-radius: 20px;
    border: 2px solid blue;
    backgroud: transparent;
    color: blue;
    font-size: 16px;
    cursor: pointer;

`;

const ModalParent = ({ films_name, films_image, films_description, films_budget, films_url, films_genre }) => { 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      console.log('in modal');
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

export default ModalParent;
