import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import donationData from './mockdonationinfo'; 
// import useDonation from '../hooks/useDonation'; 


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function DenseTable() {
  const classes = useStyles();
  
  const rows = donationData.map((donation) => ({
    id: donation.donations_id,  
    film_name: donation.films_name,
    donation_amount: donation.donations_amount,
    donation_date: donation.donation_date
  }));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Previous Donations</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Film Name</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.donation_date}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.film_name}</TableCell>
              <TableCell align="right">{row.donation_amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
