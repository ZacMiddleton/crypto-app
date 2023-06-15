import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledList, Suggestion, StyledInput } from "./SearchInput.styles";
import { useMemo } from "react";
import debounce from "lodash/debounce";
import { useEffect } from "react";

export function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (value) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(
          value
        )}`
      );
      const coins = data?.coins
        .filter(
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
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleSearch, 500),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

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
      debouncedChangeHandler(e.target.value);
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
