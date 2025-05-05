import { useEffect } from 'react';
import axios from 'axios';
import { useCurrencyContext } from '../context/CurrencyContext';

export const useExchangeRates = () => {
  const { setRates } = useCurrencyContext();

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/c20bf0150db3c0093b086da8/latest/USD`);
        setRates(res.data.conversion_rates);
      } catch (err) {
        console.error("Error fetching exchange rates", err);
      }
    };
    fetchRates();
  }, [setRates]);
};
