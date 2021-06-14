/* eslint-disable max-len */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { 
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent, 
  DonateNowButton, 
  CloseModalButton, 
  OpaqueCover,
  CloseModalAnimate
} from './ModalStyling'; 



const Modal = ({ showModal, setShowModal, films_description, films_image, films_name, films_budget, films_url, }) => { 
 
  const modalRef = useRef();


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
          <OpaqueCover>
            <ModalWrapper showModal={showModal}>
              <ModalImg 
                src={films_image} 
                alt="film image"
              />
              <ModalContent>
                <h1>{films_name}</h1>
                <p>{films_description}</p>
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
};

export default Modal;
