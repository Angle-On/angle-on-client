const DEVURL = 'https://angle-on.herokuapp.com';
// const DEVURL = 'http://localhost:7890';
const URL = DEVURL;

export const getFilms = async () => {
  const res = await fetch('https://angle-on.herokuapp.com/api/v1/films');
  const films = await res.json();
  console.log(films, 'films');

  return films.map((film) => ({
    director_lastname: film.lastName,
    director_firstname: film.firstName,
    films_id: film.filmId,
    director_id: film.filmDirectorId,
    films_name: film.filmName,
    films_image: film.filmImg,
    films_description: film.filmDescription,
    films_budget: film.filmBudget,
    films_url: film.filmUrl,
    films_genre: film.filmGenre,
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
  const res = await fetch(`${URL}/api/v1/films/${id}`, {
    credentials: 'include',
  });
  console.log(res, 'res');
  const films = await res.json();

  return films;
};

//google oAuth
export const verifyDirectorToken = async ({ profileObj, tokenId }) => {
  const response = await fetch(`${URL}/api/v1/directors/auth`, {
    // credentials: 'include',
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

//google oAuth
export const verifyInvestorToken = async ({ profileObj, tokenId }) => {
  const response = await fetch(`${URL}/api/v1/investors/auth`, {
    // credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
      email: profileObj.email,
      investorImg: profileObj.imageUrl,
      tokenId,
    }),
  });
  console.log(response);
  return response;
};

//verify director user route
export const verifyDirectorUser = async () => {
  const response = await fetch(`${URL}/api/v1/directors/verify`, {
    credentials: 'include',
  });
  const user = await response.json();
  return user;
};

//verify director user route
export const verifyInvestorUser = async () => {
  const response = await fetch(`${URL}/api/v1/investors/verify`, {
    credentials: 'include',
  });
  const user = await response.json();
  return user;
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

export const sendDonation = async (amount, filmId) => {
  const response = await fetch(`${URL}/api/v1/donations`, {
    // credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      donation_amount: amount,
      film_id: filmId,
      investor_id: 1
    }),
  });
  console.log(response, 'STRIPE RESPONSE')  ;
  return response;
};
