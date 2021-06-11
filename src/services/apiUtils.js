import FilmData from '../components/films/mockDataFilm';

export const getCharacters = async () => {
  const res = await fetch(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters'
  );

  const characters = await res.json();

  return characters.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};

export const getFilms = async () => {
  // const res = await fetch(
  //   'https://hey-arnold-api.herokuapp.com/api/v1/characters'
  // );

  // const characters = await res.json();

  const films = FilmData;

  return films.map((film) => ({
    films_id: film.films_id,
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
