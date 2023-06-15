import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledList, Suggestion, StyledInput } from "./SearchInput.styles";
import _ from "lodash";

export function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = _.debounce(async (value) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(value)}`
      );
      const coins = data.coins
      setResults(response.data);
    } catch (err) {
      setError("An error occurred while searching");
    }
  }, 1000);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0 && results.length > 0) {
      navigate(`/coin/${results[0].id}`);
    }
    setInputValue("");
    setResults("");
  };

  const onChange = (e) => {
    if (e.target.value.length < 0) {
      setResults("");
    } else {
      handleSearch(e.target.value);
    }
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setInputValue("");
    setResults("");
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={onChange}
      />
      {results.length > 0 && inputValue.length > 0 && (
        <StyledList>
          {results.map((item) => (
            <Suggestion
              key={item.id}
              to={`/coin/${item.id}`}
              onClick={handleClick}
              value={inputValue}
            >
              {item.name}
            </Suggestion>
          ))}
        </StyledList>
      )}
    </form>
  );
}
