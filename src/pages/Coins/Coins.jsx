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
    perPage: 25,
    pageNumber: 1,
  };

  getBtcData = (info) => {
    const { prices, total_volumes } = info.data;
    this.setState({
      lineData: prices,
      barData: total_volumes,
    });
  };

  getCoinData = (info) => {
    if (this.state.coinData) {
      let newCoinData = [...this.state.coinData];
      info.data.forEach((coin) => {
        if (!newCoinData.some((item) => item.id === coin.id)) {
          newCoinData.push(coin);
        }
      });
      this.setState({ coinData: newCoinData });
    } else {
      this.setState({
        coinData: [...info.data],
      });
    }
  };

  handleInfiniteScroll = (info) => {
    let newCoinData = [...this.state.coinData];
      info.data.forEach((coin) => {
        if (!newCoinData.some((item) => item.id === coin.id)) {
          newCoinData.push(coin);
        }
      });
      this.setState({ coinData: newCoinData });
  }

  handleChangeCurrency = (info) => {
    this.setState({ coinData: info.data });
  }

  fetchData = () => {
    const { pageNumber, currency, perPage } = this.state
    const nextPage = pageNumber + 1;
    const morePerPage = perPage + perPage;
    coinData(this.handleInfiniteScroll, currency, nextPage, perPage);
    this.setState({ pageNumber: nextPage, perPage: morePerPage });
  }

  componentDidMount() {
    const { currency, perPage, pageNumber } = this.state;
    btcPriceData(this.getBtcData, currency);
    coinData(this.getCoinData, currency, pageNumber, perPage );
  }

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.props;
    if (currency !== prevProps.currency) {
      this.setState({ currency, }, () => {
        coinData(this.handleChangeCurrency, currency, 1, this.state.perPage);
      });
    }
  };

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

        {coinData && <CryptoTable coinData={coinData} currency={currency} fetchData={this.fetchData} />}
      </Container>
    );
  }
}

export default Coins;
