import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Coins from "./pages/Coins/Coins";
import Portfolio from "./pages/Portfolio/Portfolio";
import Root from "./components/Root"
import { useLocalStorage } from '/src/utils/hooks';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { darkTheme, lightTheme } from "./utils/theme";
import { AppContainer, Wrapper, } from "./App.Styles";

function App() {
  const [theme, setTheme] = useLocalStorage("light", 'light');
  const [currency, setCurrency] = useLocalStorage('currency', 'USD')

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root theme={theme} toggleTheme={toggleTheme} currency={currency} setCurrency={setCurrency} />}
      >
        <Route index path="/" element={<Coins currency={currency} />} />
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
