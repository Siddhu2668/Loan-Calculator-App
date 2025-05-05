import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Home from './pages/Home';
import About from './pages/About';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';

import { ThemeContextProvider } from './context/ThemeContext';
import { CurrencyContextProvider } from './context/CurrencyContext';
import theme from './theme';

function App() {
  return (
    <ThemeContextProvider>
      <CurrencyContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </CurrencyContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
