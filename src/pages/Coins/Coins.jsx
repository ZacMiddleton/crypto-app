import LineChart from "/src/components/BtcLineChart";
import BarChart from "/src/components/BtcBarChart";
import { BtcChartWrapper, Container } from "./Coins.styles";
import React from "react";
import { btcPriceData } from "/src/utils/CoinGecko";
import CryptoTable from "/src/components/CryptoTable";
import { coinData } from "/src/utils/CoinGecko";

class Coins extends React.Component {
  state = {
    lineData: null,
    barData: null,
    coinData: null,
  };

  getBtcData = (info) => {
    const { prices, total_volumes } = info.data;
    this.setState({
      lineData: prices,
      barData: total_volumes,
    });
  };

  getCoinData = (info) => {
    this.setState({
      coinData: info.data,
    });
  };

  componentDidMount() {
    btcPriceData(this.getBtcData);
    coinData(this.getCoinData);
  }

  render() {
    const { lineData, barData, coinData } = this.state;
    return (
      <Container>
        <BtcChartWrapper>
          {lineData && barData && (
            <>
              <LineChart lineData={lineData} coinData={coinData} />
              <BarChart barData={barData} coinData={coinData} />
            </>
          )}
        </BtcChartWrapper>

        {coinData && <CryptoTable coinData={coinData} />}
      </Container>
    );
  }
}

export default Coins;
