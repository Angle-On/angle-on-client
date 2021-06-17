import styled from 'styled-components';

export const Body = styled.body`
background-color: black
`;

export const FilmImage = styled.img`
height: 300px;
width: 300px;
margin-top: 10px;
margin-bottom: 10px;
`;

export const Underline = styled.div`
background: black;
height: 2px;
width: 400px;
margin-bottom: 5px;

`;

export const FilmContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
margin: 50px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;
height: 80vh;
width: 120vh;
`;

export const ShortFilms = styled.div`
list-style: none;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
text-align:center;
background: #fff;
`;
