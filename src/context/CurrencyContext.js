import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState({ USD: 1 });

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, setRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => useContext(CurrencyContext);
