import { useState } from 'react'
import { Outlet, useLocation, } from "react-router-dom";
import { useLocalStorage } from '/src/utils/hooks';
import { SearchInput } from "/src/components/SearchInput";
import { CurrencySelect } from "/src/components/CurrencySelect";
import NavMarketData from "/src/components/NavMarketData"
import { StyledDiv, StyledLink, MainNav, NavContainer, } from "./Root.styles"

const Root = (props) => {
    const { toggleTheme, theme } = props;
    const location = useLocation();
    const currentPath = location.pathname;
    const [optionSelected, setOptionSelected] = useLocalStorage('optionSelected', 'USD');
    const [isOpen, setIsOpen] = useState(false);

    const currencyToggle = (value) => {
      const {setCurrency} = props
      if (value) {
          setOptionSelected(value)
          setCurrency(value)
        }
        setIsOpen(!isOpen)
    }

    return (
      <>
        <NavContainer>
          <MainNav>
            <StyledDiv>
              <StyledLink to="/" $active={currentPath === '/'}>Coins</StyledLink>
              <StyledLink to="/Portfolio" $active={currentPath === '/Portfolio'}>Portfolio</StyledLink>
            </StyledDiv>
            <StyledDiv>
              <SearchInput />
              <CurrencySelect optionSelected={optionSelected} isOpen={isOpen} currencyToggle={currencyToggle} />
              <button onClick={toggleTheme}>{theme}</button>
            </StyledDiv>
          </MainNav>
          <NavMarketData />
        </NavContainer>
  
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  export default Root;