/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import FilmData from '../../components/films/mockDataFilm'; 
import {getFilmsById} from '../../services/apiUtils';
// import { getFilmsById } from '../../services/apiUtils';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FilmerSubmissionTable({ user }) {
  const classes = useStyles();
  const [filmData, setFilmData] = useState([]); 

  console.log(user.user.directorId, 'this should be id'); 

  const id = user.user.directorId;

  useEffect(() => {
    getFilmsById(id)
      .then(filmData => setFilmData(filmData)); 
  }, []); 
  
  const rows = filmData.map((film) => ({
    id: film.film_id,  
    film_name: film.film_name,
    // film_description: film.films_description,
    film_budget: film.film_budget,
    film_url: film.film_url,
    film_genre: film.film_genre,
    film_image: film.film_image
  }));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Film Submissions</TableCell>
            <TableCell align="right">Budget</TableCell>
            {/* <TableCell align="right">Description</TableCell> */}
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Film Still</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.film_name}>
              <TableCell component="th" scope="row">
                {row.film_name}
              </TableCell>
              <TableCell align="right">$ {row.film_budget}</TableCell>
              {/* <TableCell align="right">{row.film_description}</TableCell> */}
              <TableCell align="right"><a href={row.film_url} target="_blank" rel="noreferrer">Trailer</a></TableCell>
              <TableCell align="right">{row.film_genre}</TableCell>
              <TableCell align="right"><a href={row.film_image} target="_blank" rel="noreferrer">Image</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
