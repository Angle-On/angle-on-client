import React  from 'react';
import SocialButtons from '../socialbuttons/SocialButtons';
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutH2,
  AboutP,
  AboutIcon
} from './AboutUsElements';


const About = () => { 
  return (
    <div>
      <AboutContainer id="About">
        <AboutH1>Meet The Team</AboutH1>
        <AboutWrapper>
          <AboutCard>
            <AboutH2>Katilyn Wiggins</AboutH2>
            <AboutIcon  />
            <AboutP>
            Developer, thrifter, crafter, easily lost on purpose.
            </AboutP>
          </AboutCard>
          <AboutCard>
            <AboutH2>Zina Mohamed</AboutH2>
            <AboutIcon  />
            <AboutP>
            Software developer, lover of all things sci-fi, somewhere listening to Andre-3000.
            </AboutP>
          </AboutCard>
          <AboutCard>
            <AboutH2>Cierra McDonald</AboutH2>
            <AboutIcon  />
            <AboutP>
            Developer, plant mom, traveler, dancing to the beat of her own drum 
            </AboutP>
          </AboutCard>
          <AboutCard>
            <AboutH2>Claudia Mazariegos</AboutH2>
            <AboutIcon  />
            <AboutP>
          Software developer, beachgoer, usually somewhere basking in the sun. 
            </AboutP>
          </AboutCard>
          <AboutCard>
            <AboutH2>Josie Cantu</AboutH2>
            <AboutIcon  />
            <AboutP>
            Bio here
            </AboutP>
          </AboutCard>
          <AboutCard>
            <AboutH2>Shelby Strousse</AboutH2>
            <AboutIcon  />
            <AboutP>
            Bio Here 
            </AboutP>
          </AboutCard>
        </AboutWrapper>
      </AboutContainer>
    </div>
  );
};

export default About;



