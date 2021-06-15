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
      <MoviesH1>Trending Films</MoviesH1>
      <MoviesWrapper>
        <MoviesCard>
          <MoviesIcon src='https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' />
          <MoviesH2>Lorem ipsum</MoviesH2>
          <MoviesP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </MoviesP>
        </MoviesCard>
        <MoviesCard>
          <MoviesIcon src='https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' />
          <MoviesH2>Lorem ipsum</MoviesH2>
          <MoviesP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </MoviesP>
        </MoviesCard>
        <MoviesCard>
          <MoviesIcon src='https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' />
          <MoviesH2>Premium Benefits</MoviesH2>
          <MoviesP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </MoviesP>
        </MoviesCard>
      </MoviesWrapper>
    </MoviesContainer>
  );
};

export default Movies;
