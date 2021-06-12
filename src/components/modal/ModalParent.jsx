import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background-color: palevioletred;
    color: white;
    font-size: 24px;
    cursor: pointer;

`;

const ModalParent = () => { 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev); 

  };

  return (
    <>
      <Container>
        <Button onClick={openModal}> Learn More! </Button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
      </Container>
    </>
  );
};

export default ModalParent;
