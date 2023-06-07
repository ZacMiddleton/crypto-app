import { useEffect, useState } from "react";
import { marketData } from "/src/utils/CoinGecko";
import { Container } from "./NavMarketData.styles";

function NavMarketData() {
  const [cryptoData, setCryptoData] = useState(null);

  const getData = (marketData) => {
    setCryptoData(marketData);
  };

  useEffect(() => {
    marketData(getData);
  }, []);

  const {
    active_cryptocurrencies,
    markets,
    total_volume,
    total_market_cap,
    market_cap_percentage,
  } = cryptoData?.data?.data ?? {};
  return (
    <Container>
      {cryptoData && (
        <>
          <p>{`Coins ${active_cryptocurrencies}`}</p>
          <p>{`Exchanges ${markets}`}</p>
          <p>{Math.floor(total_volume.btc)}</p>
          <p>{Math.floor(total_market_cap.btc)}</p>
          <p>{Math.floor(market_cap_percentage.btc)}</p>
          <p>{Math.floor(market_cap_percentage.eth)}</p>
        </>
      )}
    </Container>
  );
}

export default NavMarketData;
