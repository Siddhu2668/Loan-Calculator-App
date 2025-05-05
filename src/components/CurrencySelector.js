import React from 'react';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useCurrencyContext } from '../context/CurrencyContext';

const CurrencySelector = () => {
  const { currency, setCurrency, rates } = useCurrencyContext();

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        label="Currency"
        onChange={(e) => setCurrency(e.target.value)}
      >
        {Object.keys(rates).map((curr) => (
          <MenuItem key={curr} value={curr}>
            {curr}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
