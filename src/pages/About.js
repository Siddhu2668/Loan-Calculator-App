import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>About This App</Typography>
    <Typography paragraph>
      This is a modern Loan Calculator App built with React and Material UI. It calculates EMI, provides amortization schedules, and supports real-time currency conversion using the ExchangeRate API.
    </Typography>
    <Typography paragraph>
      Key Features:
      <ul>
        <li>Loan EMI Calculation</li>
        <li>Dynamic Amortization Schedule</li>
        <li>Live Currency Conversion</li>
        <li>Dark/Light Mode</li>
        <li>Responsive Design</li>
        <li>404 and Error Pages</li>
      </ul>
    </Typography>
    <Typography paragraph>
      Live Demo: <a href="https://your-deployed-app-link.com" target="_blank" rel="noreferrer">Click Here</a>
    </Typography>
  </Container>
);

export default About;
