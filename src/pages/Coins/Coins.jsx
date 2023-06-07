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
    currency: this.props.currency,
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
    const { currency } = this.state;
    btcPriceData(this.getBtcData);
    coinData(this.getCoinData, currency);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.props;
    if (currency !== prevProps.currency) {
      this.setState({ currency }, () => {
        coinData(this.getCoinData, currency);
      });
    }
  }

  render() {
    const { lineData, barData, coinData, currency } = this.state;
    return (
      <Container>
        <BtcChartWrapper>
          {lineData && barData && (
            <>
              <LineChart
                lineData={lineData}
                coinData={coinData}
                currency={currency}
              />
              <BarChart
                barData={barData}
                coinData={coinData}
                currency={currency}
              />
            </>
          )}
        </BtcChartWrapper>

        {coinData && <CryptoTable coinData={coinData} currency={currency} />}
      </Container>
    );
  }
}

export default Coins;
