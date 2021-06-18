import React from 'react';
import {
  MoviesContainer,
  MoviesH1,
  MoviesWrapper,
  MoviesCard,
  MoviesIcon,
  MoviesH2,
  MoviesP
} from './MoviesElements';


const Movies = () => {
  return (
    <MoviesContainer id='Movies'>
      <MoviesH1>Spotlight Films</MoviesH1>
      <MoviesWrapper>
        <MoviesCard>
          <MoviesIcon src='https://angle-on.s3.us-west-2.amazonaws.com/pexels-fransa-2430945-1623990181514.jpg' />
          <MoviesH2>Joey Always Wins</MoviesH2>
          <MoviesP>
          An enraged Joey confronts the same thugs who beat them up earlier, and through interrogation acquires a rough description of the thief.
          </MoviesP>
        </MoviesCard>
        <MoviesCard>
          <MoviesIcon src='https://angle-on.s3.us-west-2.amazonaws.com/pexels-black-bird-1959036-1623988122232.jpg' />
          <MoviesH2>Trophy Magnet</MoviesH2>
          <MoviesP>
          Behind the trophies and the glory, there remains a sordid history of terrible things that have gone down when the need to win eclipsed morality.
          </MoviesP>
        </MoviesCard>
        <MoviesCard>
          <MoviesIcon src='https://angle-on.s3.us-west-2.amazonaws.com/pexels-julia-volk-5273074-1623989610123.jpg' />
          <MoviesH2>Ancient Art Wars</MoviesH2>
          <MoviesP>
          Citizens and dignitaries are assembled for the unveiling of a new monument to "Peace and Prosperity".
          </MoviesP>
        </MoviesCard>
      </MoviesWrapper>
    </MoviesContainer>
  );
};

export default Movies;
