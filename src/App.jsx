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
import { darkTheme, lightTheme } from "./utils/theme";
import { AppContainer, MainNav, NavContainer } from "./App.Styles";
import NavMarketData from "./components/NavMarketData";

const Root = (props) => {
  const { toggleTheme, theme } = props;
  return (
    <>
      <NavContainer>
        <MainNav>
          <Link to="/">Coins</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <SearchInput />
          <CurrencySelect />
          <button onClick={toggleTheme}>{theme}</button>
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
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("clicked");
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
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
