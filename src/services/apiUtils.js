import { GetApp } from '@material-ui/icons';
import FilmData from '../components/films/mockDataFilm';

const DEVURL = 'https://angle-on.herokuapp.com';
const URL = DEVURL;

// export const getCharacters = async () => {
//   const res = await fetch('https://angle-on.herokuapp.com/api/v1/characters');

//   const characters = await res.json();

//   return characters.map((character) => ({
//     id: character._id,
//     name: character.name,
//     image: character.image,
//   }));
// };

export const getFilms = async () => {
  const films = FilmData;

  return films.map((film) => ({
    films_id: film.films_id,
    director_name: film.director_name,
    director_id: film.director_id,
    films_name: film.films_name,
    films_image: film.films_image,
    films_description: film.films_description,
    films_budget: film.films_budget,
    films_url: film.films_url,
    films_genre: film.films_genre,
  }));
};

//get all invstors
export const getInvestors = async () => {
  const res = await fetch(`${URL}/investors`);

  const investors = await res.json();

  return investors.map((investor) => ({
    first_name: investor.first_name,
    last_name: investor.last_name,
    email: investor.email,
  }));
};

export const getInvestorById = async () => {
  const res = await fetch(`${URL}/investors/{id}`);

  const investor = await res.json();

  return investor;
};

export const updateInvestorById = async (id, jsonBody) => {
  const res = await fetch(`${URL}/investors/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(jsonBody),
  });

  const investor = await res.json();

  return investor;
};

export const deleteInvestorById = async (id) => {
  const res = await fetch(`${URL}/investors/${id}`, {
    method: 'DELETE',
  });

  const investor = await res.json();

  return investor;
};

//filmer
export const getFilmerById = async () => {
  const res = await fetch(`${URL}/filmers/{id}`);

  const filmer = await res.json();

  return filmer;
};

export const updateFilmerById = async (id, jsonBody) => {
  const res = await fetch(`${URL}/filmers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(jsonBody),
  });

  const filmer = await res.json();

  return filmer;
};

//donations
export const getDonationById = async (id) => {
  const res = await fetch(`${URL}/donations/${id}`);

  const donation = await res.json();

  return donation;
};

//films
export const getFilmsById = async (id) => {
  const res = await fetch(`${URL}/donations/${id}`);

  const films = await res.json();

  return films;
};

//google oAuth
export const verifyDirectorToken = async ({ profileObj, tokenId }) => {
  const response = await fetch(`${URL}/api/v1/directors/auth`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
      email: profileObj.email,
      directorImg: profileObj.imageUrl,
      tokenId,
    }),
  });
  console.log(response);
  return response;
};

//verify user route
export const verifyUser = async () => {
  const response = await fetch(`${URL}/api/v1/directors/verify`, {
    credentials: 'include',
  });
  const user = await response.json();
  return user;
};

//google oAuth
export const verifyInvestorToken = async ({ profileObj, tokenId }) => {
  const response = await fetch(`${URL}/api/v1/investors/auth`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
      email: profileObj.email,
      directorImg: profileObj.imageUrl,
      tokenId,
    }),
  });
  return response;
};

//film application
export const sendFilm = async ({ filmObj }) => {
  const response = await fetch(`${URL}/api/v1/films`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(filmObj),
  });
  console.log(response);
  return response;
};
