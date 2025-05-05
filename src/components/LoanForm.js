import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const LoanForm = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(Number(principal), Number(rate), Number(years));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Loan Amount"
        variant="outlined"
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        required
      />
      <TextField
        label="Interest Rate (%)"
        variant="outlined"
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        required
      />
      <TextField
        label="Loan Term (Years)"
        variant="outlined"
        type="number"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">Calculate EMI</Button>
    </Box>
  );
};

export default LoanForm;
