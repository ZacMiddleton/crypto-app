import axios from 'axios';
import { useState } from "react";
import _ from "lodash";
import { StyledList, Suggestion, StyledInput } from './PortfolioSearch.styles';
import { useLocalStorage } from '../../utils/hooks';


const PortfolioSearch = () => {
  const [inputValue, setInputValue] = useLocalStorage("");
  const [results, setResults] = useState("");
  const [modalImg, setModalImg] = useLocalStorage('');

  const handleSearch = _.debounce(async (value) => {
    try {
      const response = await axios.get(
        `/search?query=${encodeURIComponent(value)}`
      );
      setResults(response.data);
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

  const handleClick = (coin) => {
    const coinImg = results.find(item => item.id === coin)?.thumb;
    const coinName = results.find(item => item.id === coin)?.name;
    setModalImg(`${coinImg}`);
    setInputValue(`${coinName}`);
    setResults("")
  }

  return (
    <form>
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
