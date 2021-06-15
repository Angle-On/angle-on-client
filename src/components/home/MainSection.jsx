import React, { useState } from 'react';
import { Button } from './ButtonElements';


import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight
} from './MainElements';

function MainSection() {
  const [hover] = useState(false);
  
  return (
    <MainContainer id="home">
      <MainBg>
        <VideoBg playsInline autoPlay loop muted src="https://storage.coverr.co/videos/h6NDwTfIWSxVXoOwCN600OlvREf00bDGM7?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIzNDU3NTE3fQ.6nAnO8h0lMWkvEZrYS4V3A017v5J69NTUX2yHwWqT_o" type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>Welcome to AngleOn</MainH1>
        <MainP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MainP>
        <MainBtnWrapper>
          <Button
          >
            Investor LogIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button
          >
            Filmmaker LogIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
