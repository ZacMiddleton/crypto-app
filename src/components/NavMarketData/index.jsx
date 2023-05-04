import { useEffect, useState } from "react";
import { marketData, coinData } from "/src/utils/CoinGecko";
import { Container, PercentContainer, Dot } from "./NavMarketData.styles";
import { useLocalStorage } from "/src/utils/hooks";
import { currencySymbol } from "/src/utils/ChartFunctions";

function NavMarketData({ optionSelected }) {
  const [cryptoData, setCryptoData] = useState(null);
  const [BTCData, setBTCData] = useState(null);

  const formatNumber = (number) => {
    if (Math.abs(number) >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + "B";
    } else if (Math.abs(number) >= 1_000_000) {
      return (number / 1_000_000).toFixed(2) + "M";
    } else if (Math.abs(number) >= 1_000_000_0000) {
      return (number / 1_000_000_0000).toFixed(2) + "Th";
    } else {
      return number;
    }
  };

  const getMarketData = (marketData) => {
    setCryptoData(marketData);
  };

  const getCoinData = (marketData) => {
    setBTCData(marketData);
  };

  useEffect(() => {
    marketData(getMarketData);
    coinData(getCoinData, optionSelected);
  }, []);

  useEffect(() => {
    coinData(getCoinData, optionSelected);
  }, [optionSelected]);

  const { active_cryptocurrencies, markets, market_cap_percentage } =
    cryptoData?.data?.data ?? {};

  const { total_volume, market_cap, image } = BTCData?.data[0] ?? {};
  const ethImage =
    "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880";

  return (
    <Container>
      {cryptoData && BTCData && (
        <>
          <p>{`Coins ${active_cryptocurrencies}`}</p>
          <p>{`Exchanges ${markets}`}</p>
          <Dot />
          <p>{`${currencySymbol(optionSelected)}${formatNumber(
            Math.floor(total_volume)
          )}`}</p>
          <Dot />
          <p>{`${currencySymbol(optionSelected)}${formatNumber(
            Math.floor(market_cap)
          )}`}</p>
            <PercentContainer Percentage={market_cap_percentage.btc} Margin={'5px'}>
              <p>
                <img src={`${image}`} alt="" />
                {`${formatNumber(Math.floor(market_cap_percentage.btc))}%`}
              </p>
              <div>
                <span></span>
              </div>
            </PercentContainer>
            <PercentContainer Percentage={market_cap_percentage.eth} Margin={'0px'}>
              <p>
                <img src={`${ethImage}`} alt="" />
                {`${formatNumber(Math.floor(market_cap_percentage.eth))}%`}
              </p>
              <div>
                <span></span>
              </div>
            </PercentContainer>
        </>
      )}
    </Container>
  );
}

export default NavMarketData;
