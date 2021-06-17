/* eslint-disable max-len */
import React, { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import Stripe from '../stripe/Stripe';
import PropTypes from 'prop-types';
import { 
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent, 
  DonateNowButton, 
  CloseModalButton, 
  OpaqueCover,
} from './ModalStyling'; 
import {AlternateEmailTwoTone} from '@material-ui/icons';



const Modal = ({ showModal, setShowModal, films_description, films_image, films_name, films_budget, films_url, director_name, films_id }) => { 
  const history = useHistory();

 
  const modalRef = useRef();

  //close modal with x in upper right-hand corner
  const closeModal = (e) => { 
    if(modalRef.current === e.target) { 
      setShowModal(false);
    }
  };

  //close modal by pressing the esc key
  const keyEscape = useCallback(
    e => { 
      if(e.key === 'Escape') { 
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  useEffect(() => { 
    document.addEventListener('keydown', keyEscape);
    return () => document.removeEventListener('keydown', keyEscape);
  }, [keyEscape]
  );

  
  const donateNow = () => { 
    //link to take you to donation page??
    // window.location.replace('/donation');
    console.log('hello! In the button!');

    history.push({
      pathname: '/donation',
      state: { filmId: films_id }
    });

  };


  return (
    <>
      { showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <OpaqueCover>
            <ModalWrapper showModal={showModal}>
              <ModalImg 
                src={films_image} 
                alt="film image"
              />
              <ModalContent>
                <h5>{films_id}</h5>
                <h1>{films_name}</h1>
                <h4>Created By: {director_name}</h4>
                <p>Summary: {films_description}</p>
                <p>Short Film Budget: ${films_budget}.00</p>
                <a href={films_url}>Short Film Link</a>
                <DonateNowButton onClick={() => donateNow()}>Donate Now!</DonateNowButton>
              </ModalContent>            
              <CloseModalButton aria-label="Close Modal" onClick={() => setShowModal(prev => !prev)}/>
            </ModalWrapper>
          </OpaqueCover>
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
  director_name: PropTypes.string.isRequired
};

export default Modal;
