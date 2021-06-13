/* eslint-disable max-len */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Background, ModalWrapper, ModalImg, ModalContent, DonateNowButton, CloseModalButton } from './ModalStyling'; 



const Modal = ({ showModal, setShowModal, films_description, films_image, films_name, films_budget, films_url, films_genre }) => { 
 
  const modalRef = useRef();

  const animation = useSpring({
    config: { 
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    trasnform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
  });

  const closeModal = (e) => { 
    if(modalRef.current === e.target) { 
      setShowModal(false);
    }
  };

  const donateNow = () => { 
    //link to take you to donation page??
    console.log('hello! In the button!');
  };


  return (
    <>
      { showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg 
                src={films_image} 
                alt="film image"
              />
              <ModalContent>
                <h1>{films_name}</h1>
                <p>{films_description}</p>
                <p>${films_budget}. 00</p>
                <a href={films_url}>Short Film Link</a>
                <DonateNowButton onClick={() => donateNow()}>Donate Now!</DonateNowButton>
              </ModalContent>
              <CloseModalButton aria-label="Close Modal" onClick={() => setShowModal(prev => !prev)}/>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null }
    </>
  );
};

Modal.propTypes = { 
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  films_name: PropTypes.string.isRequired,
  films_image: PropTypes.string.isRequired,
  films_description: PropTypes.string.isRequired,
  films_budget: PropTypes.number.isRequired,
  films_url: PropTypes.string.isRequired,
  films_genre: PropTypes.array.isRequired,
};

export default Modal;
