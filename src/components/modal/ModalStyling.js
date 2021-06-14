import styled, { keyframes } from 'styled-components';
import fadeInDownBig from 'react-animations/lib/fade-in-down-big';
import zoomOut from 'react-animations/lib/zoom-out';
import { MdClose } from 'react-icons/md';



export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0,8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    `;

// const fade = keyframes`
// from { 
//     opacity: 0;
//     visibility: hidden; 
// }
// to { 
//     opacity: 1;
//     visibility: visible; 
 
// }`;

export const CloseModalAnimate = styled.div`
    animation: 1.5s ${keyframes(zoomOut)};
`;

export const OpaqueCover = styled.div`
    animation: 1.0s ${keyframes(fadeInDownBig)};
    position: fixed;
    left: 50%;
    top: 50%;
         
`;


export const ModalWrapper = styled.div`
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


export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    backgroud: #000;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    padding: 10px;
`;


export const DonateNowButton = styled.button`
min-width: 150px;
padding: 10px;
border-radius: 4px;
border: none;
background-color: blue;
color: white;
font-size: 18px;
cursor: pointer;
margin-top: 50px;

&:hover { 
    background-color: blue;
    color: white;
    transform: scale(1.1)
}

`;


export const CloseModalButton = styled(MdClose)`
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

