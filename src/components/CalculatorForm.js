// src/components/CalculatorForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CalculatorForm = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ amount, interest, term });
  };

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
          mt: 2,
        }}
      >
        <TextField
          label="Loan Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
        />
        <TextField
          label="Term (Years)"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          CALCULATE
        </Button>
      </Box>
    </Box>
  );
};

export default CalculatorForm;
