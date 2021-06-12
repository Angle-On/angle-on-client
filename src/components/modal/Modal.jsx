import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ showModal, setShowModal }) => { 
  return (
    <>
      { showModal ? <h2>I see you!</h2> : null }
    </>
  );
};

export default Modal;
