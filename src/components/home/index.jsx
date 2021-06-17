import React from 'react';
import MainSection from './MainSection';
import MissionSection from './MissionSection';
import Movies from './Movies';
import {
  homeObjTwo,
} from './Data';



function Home() {
  return (
    <>
      <MainSection/>
      <MissionSection {...homeObjTwo} />
      <Movies />
      <MissionSection {...homeObjTwo} />
    </>
  );
}

export default Home;