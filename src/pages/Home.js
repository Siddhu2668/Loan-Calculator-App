import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

import LoanForm from '../components/LoanForm';
import AmortizationTable from '../components/AmortizationTable';
import CurrencySelector from '../components/CurrencySelector';
import { useEMICalculator } from '../hooks/useEMICalculator';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { useCurrencyContext } from '../context/CurrencyContext';
import { formatCurrency } from '../utils';

const Home = () => {
  const [loanDetails, setLoanDetails] = useState({ emi: 0, schedule: [] });
  const { currency, rates } = useCurrencyContext();
  useExchangeRates();

  const handleCalculate = (p, r, y) => {
    const result = useEMICalculator(p, r, y);
    setLoanDetails(result);
  };

  const convertedEMI = loanDetails.emi * (rates[currency] || 1);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Loan EMI Calculator</Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <LoanForm onCalculate={handleCalculate} />
        <CurrencySelector />
        {loanDetails.emi > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">
              Monthly EMI: {formatCurrency(convertedEMI, currency)}
            </Typography>
            <AmortizationTable schedule={loanDetails.schedule} />
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Home;
