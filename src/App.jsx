import { useState, useEffect } from "react";
import {connect} from "react-redux";
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
// import { coinData } from "./utils/CoinGecko";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import { AppContainer, Wrapper, } from "./App.Styles";
import { getCoinData } from './store/coinData/actions';

function App({theme, currency, coinData, getCoinData}) {
  const [coinInfo, setCoinInfo] = useState(null)

  useEffect(() => {
    getCoinData(currency, 1, 25);
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root coinData={coinInfo} />}
      >
        <Route index path="/" element={<Coins coinData={coinData} setCoinData={setCoinInfo} />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/coin/:coinId" element={<CoinPage />} />
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

const mapStateToProps = (state) => ({
  theme: state.theme,
  currency: state.currency,
  coinData: state.coinData.data,
})

const mapDispatchToProps = {
  getCoinData,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
