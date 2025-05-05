import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useCurrencyContext } from '../context/CurrencyContext';
import { useExchangeRates } from '../hooks/useExchangeRates';

const ExchangeRates = () => {
  const { rates } = useCurrencyContext();
  useExchangeRates();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Live Exchange Rates (Base: USD)</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).map(([code, rate]) => (
            <TableRow key={code}>
              <TableCell>{code}</TableCell>
              <TableCell>{rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ExchangeRates;
