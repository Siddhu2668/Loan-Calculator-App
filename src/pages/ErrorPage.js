import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>404 - Page Not Found</Typography>
      <Typography variant="body1" gutterBottom>
        Oops! The page you're looking for does not exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Go Home</Button>
    </Container>
  );
};

export default ErrorPage;
