import React, { useState }  from 'react';
import { SearchDiv, Input } from './SearchElements';
import { getFilms } from '../../services/apiUtils';

const SearchBox = () => { 
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);


  const handleGenreSearch = (e) => { 
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filteredFilms = films.filter(film => {
    return film.films_genre.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filteredFilms);
        

 
  return (
    <SearchDiv>
      <Input
        type="text"
        placeholder="Search by genre"
        value={search}
        onChange={handleGenreSearch}
      >
      </Input>
      {filteredFilms.map(film => (<div>
        <p>{film.film_description}</p>
      </div>))}
    </SearchDiv>
  );
};

export default SearchBox;
