import axios from 'axios';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import _ from "lodash";
import { StyledList, Suggestion, StyledInput } from './PortfolioSearch.styles';
import { useLocalStorage } from '../../utils/hooks';
import { setModalImg } from '../../store/modalImg/actions';


const PortfolioSearch = () => {
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useLocalStorage("");
  const [results, setResults] = useState("");
  const [savedCoin, setSavedCoin] = useState(null);

  const handleSearch = _.debounce(async (value) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(value)}`
      );
      const coins = data?.coins.filter(
        (el) =>
          el.id.startsWith(value) ||
          el.name.startsWith(value) ||
          el.symbol.startsWith(value)
      )
      .slice(0, 10);
      setResults(coins);
    } catch (err) {
      setError("An error occurred while searching");
    }
  }, 1000);

  const onChange = (e) => {
    if (e.target.value.length < 0) {
      setResults("");
    } else {
      handleSearch(e.target.value);
    }
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0 && results.length > 0) {
      const coin = results[0]
      setInputValue(`${coin.id}`);
      dispatch(setModalImg(coin.large));
      setSavedCoin(coin);
    }
    setResults("");
  };

  const handleClick = (coin) => {
    const coinImg = results.find(item => item.id === coin)?.large;
    const coinName = results.find(item => item.id === coin)?.name;
    dispatch(setModalImg(`${coinImg}`));
    setInputValue(`${coinName}`);
    setResults("");
    setSavedCoin(coin);
  }

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        type="text"
        placeholder="Search coins"
        value={inputValue}
        onChange={onChange}
      />
      {results.length > 0 && inputValue.length > 0 && (
        <StyledList>
          {results.map((item) => (
            <Suggestion
              key={item.id}
              onClick={() => handleClick(item.id)}
              value={inputValue}
            >
              {item.name}
            </Suggestion>
          ))}
        </StyledList>
      )}
    </form>
  );
};

export default PortfolioSearch;
