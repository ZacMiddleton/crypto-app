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
    perPage: 25,
    pageNumber: 1,
    timeline: 180,
  };

  getBtcData = (info) => {
    const { prices, total_volumes } = info.data;
    this.setState({
      lineData: prices,
      barData: total_volumes,
    });
  };

  handleInfiniteScroll = (info) => {
    let newCoinData = [...this.props.coinData];
    info.data.forEach((coin) => {
      if (!newCoinData.some((item) => item.id === coin.id)) {
        newCoinData.push(coin);
      }
    });
    this.props.setCoinData(newCoinData);
  };

  handleChangeCurrency = (info) => {
    this.props.setCoinData(info.data);
  };

  fetchData = () => {
    const { pageNumber, perPage } = this.state;
    const { currency } = this.props;
    const nextPage = pageNumber + 1;
    const morePerPage = perPage + perPage;
    coinData(this.handleInfiniteScroll, currency, nextPage, perPage);
    this.setState({ pageNumber: nextPage, perPage: morePerPage });
  };

  componentDidMount() {
    const { currency } = this.props;
    const { timeline } = this.state;
    btcPriceData(this.getBtcData, currency, timeline);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.props;
    const { timeline, perPage } = this.state;
    if (currency !== prevProps.currency) {
      this.setState({ currency }, () => {
        coinData(this.handleChangeCurrency, currency, 1, perPage);
        btcPriceData(this.getBtcData, currency, timeline);
      });
    }
  }

  render() {
    const { lineData, barData } = this.state;
    const { coinData, currency } = this.props;
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

        {coinData && (
          <CryptoTable
            coinData={coinData}
            currency={currency}
            fetchData={this.fetchData}
          />
        )}
      </Container>
    );
  }
}

export default Coins;
