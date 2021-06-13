/* eslint-disable max-len */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';


const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0,8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    `;

const ModalWrapper = styled.div`
    width: 800px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    backgroud: #fff;
    background-color: #e7e5e3;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    `;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // position: fixed;
    // left: 0;
    // top: 0;
    // right: 0;
    // bottom: 0;

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    backgroud: #000;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    padding: 10px;
`;

// p { 
//     margin-bottom: 1rem;
// }

// button { 
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border:none;
// };

const DonateNowButton = styled.button`
min-width: 100px;
padding: 16px 32px;
border-radius: 4px;
border: none;
background-color: blue;
color: white;
font-size: 18px;
cursor: pointer;
`;


const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
color: black
`;



const Modal = ({ showModal, setShowModal, films_description, films_image, films_name, films_budget, films_url, films_genre }) => { 
 
console.log(films_description, 'MODAL');
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
                alt="film image"/>
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
