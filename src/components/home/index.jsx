import React from 'react';
import MainSection from './MainSection';
import MissionSection from './MissionSection';
import Movies from './Movies';
import {
  homeObjTwo,
  homeObjOne
} from './Data';
import Footer from './Footer';



function Home() {
  return (
    <>
      <MainSection/>
      <MissionSection {...homeObjTwo} />
      <Movies />
      <MissionSection {...homeObjOne} />
      <Footer/>
    </>
  );
}

export default Home;