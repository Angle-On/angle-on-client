import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getDonationByInvestorId } from '../../services/apiUtils'; 



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function DenseTable({ user }) {
  const [donationData, setDonationData] = useState([]); 
  const classes = useStyles();
   
  
  const id = user.user.investorId; 

  useEffect(() => {
    getDonationByInvestorId(id)
      .then(donationData => setDonationData(donationData)); 
  }, []); 

  const rows = donationData.map((donation) => ({
    // id: donation.donationId,  
    film_name: donation.film_name,
    donation_amount: donation.donation_amount,
  }));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Previous Donations</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.film_name}>
              <TableCell component="th" scope="row">
                {row.film_name}
              </TableCell>
              <TableCell align="right">${row.donation_amount}.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
