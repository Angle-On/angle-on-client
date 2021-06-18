import React from 'react';
import { Button } from './ButtonElements';
import {
  MissionContainer,
  MissionWrapper,
  MissionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './MissionElements';

const MissionSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
  image
}) => {
  
  return (
    <>
      <MissionContainer lightBg={lightBg} id={id}>
        <MissionWrapper>
          <MissionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} />
              </ImgWrap>
            </Column2>
          </MissionRow>
        </MissionWrapper>
      </MissionContainer>
    </>
  );
};

export default MissionSection;
