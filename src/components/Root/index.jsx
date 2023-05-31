import { useState } from "react";
import { connect } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { useLocalStorage } from "/src/utils/hooks";
import { SearchInput } from "/src/components/SearchInput";
import { CurrencySelect } from "/src/components/CurrencySelect";
import { DarkThemeIcon, LightThemeIcon } from "/src/assets/ThemeIcons";
import NavMarketData from "/src/components/NavMarketData";
import {
  StyledDiv,
  StyledLink,
  MainNav,
  NavContainer,
  ThemeIconContainer,
} from "./Root.styles";
import { setCurrency } from "../../store/currency/action";
import { toggleTheme } from "../../store/theme/actions";

const Root = ({ toggleTheme, theme, setCurrency, coinData }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [optionSelected, setOptionSelected] = useLocalStorage(
    "optionSelected",
    "USD"
  );
  const [isOpen, setIsOpen] = useState(false);

  const currencyToggle = (value) => {
    if (value) {
      setOptionSelected(value);
      setCurrency(value);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavContainer>
        <MainNav>
          <StyledDiv>
            <StyledLink to="/" $active={currentPath === "/"}>
              Coins
            </StyledLink>
            <StyledLink to="/Portfolio" $active={currentPath === "/Portfolio"}>
              Portfolio
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <SearchInput />
            <CurrencySelect
              optionSelected={optionSelected}
              isOpen={isOpen}
              currencyToggle={currencyToggle}
              setIsOpen={setIsOpen}
            />
            <ThemeIconContainer
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
            >
              {theme === "dark" ? <LightThemeIcon /> : <DarkThemeIcon />}
            </ThemeIconContainer>
          </StyledDiv>
        </MainNav>
        <NavMarketData optionSelected={optionSelected} coinData={coinData} />
      </NavContainer>

      <div>
        <Outlet />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  theme: state.theme,
});

const mapDispatchToProps = {
  setCurrency,
  toggleTheme,
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
