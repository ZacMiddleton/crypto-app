import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const Root = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme);
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
      dispatch(setCurrency(value));
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
              onClick={() => dispatch(toggleTheme())}
              style={{ cursor: "pointer" }}
            >
              {theme === "dark" ? <LightThemeIcon /> : <DarkThemeIcon />}
            </ThemeIconContainer>
          </StyledDiv>
        </MainNav>
        <NavMarketData optionSelected={optionSelected} />
      </NavContainer>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
