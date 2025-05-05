import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { formatCurrency } from '../utils';
import { useCurrencyContext } from '../context/CurrencyContext';

const AmortizationTable = ({ schedule }) => {
  const { currency, rates } = useCurrencyContext();
  const rate = rates[currency] || 1;

  return (
    <Table sx={{ mt: 4 }}>
      <TableHead>
        <TableRow>
          <TableCell>Month</TableCell>
          <TableCell>Principal</TableCell>
          <TableCell>Interest</TableCell>
          <TableCell>Balance</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {schedule.map((row) => (
          <TableRow key={row.month}>
            <TableCell>{row.month}</TableCell>
            <TableCell>{formatCurrency(row.principal * rate, currency)}</TableCell>
            <TableCell>{formatCurrency(row.interest * rate, currency)}</TableCell>
            <TableCell>{formatCurrency(row.balance * rate, currency)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AmortizationTable;
