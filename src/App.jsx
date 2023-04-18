import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Coins from "./pages/Coins/Coins";
import Portfolio from "./pages/Portfolio/Portfolio";
import { SearchInput } from "./components/SearchInput";
import { CurrencySelect } from "./components/CurrencySelect";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { darkTheme, lightTheme } from "./utils/theme";
import { AppContainer, MainNav, NavContainer, Wrapper, StyledDiv, StyledLink} from "./App.Styles";
import NavMarketData from "./components/NavMarketData"


const Root = (props) => {
  const { toggleTheme, theme } = props;
  return (
    <>
      <NavContainer>
        <MainNav>
          <div>
            <StyledLink to="/">Coins</StyledLink>
            <StyledLink to="/Portfolio">Portfolio</StyledLink>
          </div>
          <StyledDiv>
            <SearchInput />
            <CurrencySelect />
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

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root theme={theme} toggleTheme={toggleTheme} />}
      >
        <Route index path="/" element={<Coins />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
