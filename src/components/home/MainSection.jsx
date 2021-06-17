import React, { useState } from 'react';
import { Button } from './ButtonElements';
import DirectorLogin  from '../authentication/DirectorLogin';
import InvestorLogin from '../authentication/InvestorLogin';

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
        In the film industry, Angle On is the act of directing the camera to move and focus on a particular subject. Our mission is to move the lens onto individuals from underrepresented communities and focus on their creativity and talent. Our organization supports equality, equity, and economic empowerment for all. 
        </MainP>
        <MainBtnWrapper>
          <Button onClick={() => window.location.replace('/investor-registration')}
          >
            Investor LogIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button onClick={() => window.location.replace('/filmer-registration')}
          >
            Filmmaker LogIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
