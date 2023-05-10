import { useState, useEffect } from "react";
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
import CoinPage from "./pages/CoinPage/CoinPage";
import { coinData } from "./utils/CoinGecko";
import { useLocalStorage } from './utils/hooks';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import { AppContainer, Wrapper, } from "./App.Styles";

function App() {
  const [theme, setTheme] = useLocalStorage("light", 'light');
  const [currency, setCurrency] = useLocalStorage('currency', 'USD')
  const [coinInfo, setCoinInfo] = useState(null)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getCoinData = (info) => {
    setCoinInfo(info.data)
  };

  useEffect(() => {
    coinData(getCoinData, currency, 1, 25);
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root theme={theme} toggleTheme={toggleTheme} currency={currency} setCurrency={setCurrency} coinData={coinInfo} />}
      >
        <Route index path="/" element={<Coins currency={currency} coinData={coinInfo} setCoinData={setCoinInfo} />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/coin/:coinId" element={<CoinPage currency={currency} theme={theme} />} />
      </Route>
    )
  )

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
