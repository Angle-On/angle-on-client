import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: black;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;


export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #2196f3;
  margin: 50px;
  border-bottom: 2px solid white;

  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;


