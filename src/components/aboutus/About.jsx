import React, { useEffect } from 'react';
import { BioDivs } from './AboutUsElements';
import SocialButtons from '../socialbuttons/SocialButtons';


const About = () => { 
  return (
    <div>
      <h2>About Us</h2>
      <BioDivs>
        <h2>Shelby Strousse</h2>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Twitter</button>
        <button>Email</button>
        <button>Resume</button>
      </BioDivs>
      <BioDivs>
        <h2>Zina Mohamed</h2>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Twitter</button>
        <button>Email</button>
        <button>Resume</button>
      </BioDivs>
      <BioDivs>
        <h2>Cierra McDonald</h2>
        <a href="https://www.linkedin.com/in/cierra-mcdonald/">LinkedIn</a>
        <button>GitHub</button>
        <button>Twitter</button>
        <button>Email</button>
        <button>Resume</button>
      </BioDivs>
      <BioDivs>
        <h2>Claudia Mazariegos</h2>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Twitter</button>
        <button>Email</button>
        <button>Resume</button>
      </BioDivs>
      <BioDivs>
        <h2>Katilyn Wiggins</h2>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Twitter</button>
        <button>Email</button>
        <button>Resume</button>
      </BioDivs>
      <BioDivs>
        <h2>Josie Cantu</h2>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Twitter</button>
        <button>Email</button>
        <button>Resume</button>
      </BioDivs>

    </div>
  );
};

export default About;



