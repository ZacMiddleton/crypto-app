import { useState, useEffect } from "react";
import { InputWrapper, Container } from "./ConversionCalculator.styles";
import { ConversionIcon } from "/src/assets/ThemeIcons";

const ConversionCalculator = ({ currency, coinInfo }) => {
  const { symbol, market_data: { current_price } } = coinInfo;
  let currencyAmount = current_price[currency.toLowerCase()];
  let coinAmount = currencyAmount / currencyAmount;

  const [currencyInputValue, setCurrencyInputValue] = useState(
    current_price[currency.toLowerCase()]
  );
  const [coinInputValue, setCoinInputValue] = useState(
    current_price[currency.toLowerCase()] /
      current_price[currency.toLowerCase()]
  );
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCurrencyInputChange = (e) => {
    setCurrencyInputValue(e.target.value);
    handleCurrencyConversion(e.target.value);
  };

  const handleCoinInputChange = (e) => {
    setCoinInputValue(e.target.value);
    handleCoinConversion(e.target.value);
  };

  const handleCurrencyConversion = (value) => {
    let coinValue = coinAmount / currencyAmount;
    let sum = (coinValue * value).toFixed(2).toLocaleString();
    setCoinInputValue(sum);
  };

  const handleCoinConversion = (value) => {
    let sum = (currencyAmount * value).toFixed(2).toLocaleString();
    setCurrencyInputValue(sum);
  };

  const handleFlipped = () => {
    setIsFlipped(prevIsFlipped => !prevIsFlipped);
  }

  useEffect(() => {
    handleCoinConversion(coinInputValue);
  }, [currency]);

  return (
    <Container>
      {!isFlipped && (
        <>
          <InputWrapper>
            <div>
              <p>{currency}</p>
            </div>
            <input
              onChange={handleCurrencyInputChange}
              value={currencyInputValue}
              type="number"
            />
          </InputWrapper>
          <ConversionIcon onClick={handleFlipped} />
          <InputWrapper>
            <div>
              <p>{symbol.toUpperCase()}</p>
            </div>
            <input
              onChange={handleCoinInputChange}
              value={coinInputValue}
              type="number"
            />
          </InputWrapper>
        </>
      )}
      {isFlipped && (
        <>
          <InputWrapper>
            <div>
              <p>{symbol.toUpperCase()}</p>
            </div>
            <input
              onChange={handleCoinInputChange}
              value={coinInputValue}
              type="number"
            />
          </InputWrapper>
          <ConversionIcon onClick={handleFlipped} />
          <InputWrapper>
            <div>
              <p>{currency}</p>
            </div>
            <input
              onChange={handleCurrencyInputChange}
              value={currencyInputValue}
              type="number"
            />
          </InputWrapper>
        </>
      )}
    </Container>
  );
};

export default ConversionCalculator;
