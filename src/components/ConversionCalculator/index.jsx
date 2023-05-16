import { useState, useEffect } from "react";
import { InputWrapper, Container } from "./ConversionCalculator.styles";
import { ConversionIcon } from "/src/assets/ThemeIcons";

const ConversionCalculator = ({ currency, coinInfo }) => {
  const { symbol } = coinInfo;
  const { market_data } = coinInfo;
  const { current_price } = market_data;
  let currencyAmount = current_price[currency.toLowerCase()];
  let coinAmount = currencyAmount / currencyAmount;

  const [currencyInputValue, setCurrencyInputValue] = useState(current_price[currency.toLowerCase()]);
  const [coinInputValue, setCoinInputValue] = useState(current_price[currency.toLowerCase()] / current_price[currency.toLowerCase()]);

  const handleCurrencyInputChange = (e) => {
    setCurrencyInputValue(e.target.value)
    handleCurrencyConversion(e.target.value);
  }

  const handleCoinInputChange = (e) => {
    setCoinInputValue(e.target.value)
    handleCoinConversion(e.target.value);
  }

  const handleCurrencyConversion = (value) => {
    let coinValue = coinAmount / currencyAmount;
    let sum = (coinValue * value).toFixed(2).toLocaleString();
    setCoinInputValue(sum);
  };

  const handleCoinConversion = (value) => {
    let sum = (currencyAmount * value).toFixed(2).toLocaleString();
    setCurrencyInputValue(sum)
  }

  useEffect(() => {
    // handleCurrencyConversion(currencyInputValue);
    handleCoinConversion(coinInputValue);
  }, [currency]);

  return (
    <Container>
      <InputWrapper>
        <div>
          <p>{currency}</p>
        </div>
        <input defaultValue={`${currencyAmount.toLocaleString()}`} onChange={handleCurrencyInputChange} value={currencyInputValue} type="number" />
      </InputWrapper>
      <ConversionIcon />
      <InputWrapper>
        <div>
          <p>{symbol.toUpperCase()}</p>
        </div>
        <input defaultValue={`${coinAmount}`} onChange={handleCoinInputChange} value={coinInputValue} type="number" />
      </InputWrapper>
    </Container>
  );
};

export default ConversionCalculator;
