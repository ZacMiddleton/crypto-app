import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Coins from "./pages/Coins/Coins";
import Portfolio from "./pages/Portfolio/Portfolio";
import Root from "./components/Root";
import CoinPage from "./pages/CoinPage/CoinPage";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import { AppContainer, Wrapper } from "./App.Styles";
import { getCoinData } from "./store/coinData/actions";

function App() {
  const [coinInfo, setCoinInfo] = useState(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const currency = useSelector((state) => state.currency);
  const coinData = useSelector((state) => state.coinData.data);

  useEffect(() => {
    dispatch(getCoinData(currency, 1, 25));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root coinData={coinData} />}>
        <Route
          index
          path="/"
          element={<Coins coinData={coinData} setCoinData={setCoinInfo} />}
        />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/coin/:coinId" element={<CoinPage />} />
      </Route>
    )
  );

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
