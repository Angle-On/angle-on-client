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
        <VideoBg playsInline autoPlay loop muted src="https://storage.coverr.co/videos/h6NDwTfIWSxVXoOwCN600OlvREf00bDGM7?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI0MDMyMDMzfQ.rVgdjmR24XDr-zPqSKmjqIjwCuMhFGJQnva_u710M44" type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>Welcome to Angle On</MainH1>
        <MainP>
        In the film industry, Angle On is the act of directing the camera to move and focus on a particular subject.
        </MainP>
        <MainBtnWrapper>
          <Button onClick={() => window.location.replace('/investor-registration')}
          >
            Investor LogIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button onClick={() => window.location.replace('/filmer-registration')}
          >
            Director LogIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
