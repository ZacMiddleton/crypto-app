import { useSelector, connect } from 'react-redux';
import LineChart from "/src/components/BtcLineChart";
import BarChart from "/src/components/BtcBarChart";
import { BtcChartWrapper, Container } from "./Coins.styles";
import React from "react";
import CryptoTable from "/src/components/CryptoTable";
import { coinData } from "/src/utils/CoinGecko";
import { getBtcPriceData } from '../../store/btcChartData/actions';

class Coins extends React.Component {
  state = {
    perPage: 25,
    pageNumber: 1,
    timeline: 180,
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
    this.props.getBtcPriceData(currency, timeline);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.props;
    const { timeline, perPage } = this.state;
    if (currency !== prevProps.currency) {
      this.setState({ currency }, () => {
        coinData(this.handleChangeCurrency, currency, 1, perPage);
        this.props.getBtcPriceData(currency, timeline);
      });
    }
  }

  render() {
    const { lineData, barData } = this.props;
    const { coinData } = this.props;
    return (
      <Container>
        <BtcChartWrapper>
          {lineData && barData && (
            <>
              <LineChart
                coinData={coinData}
              />
              <BarChart
                coinData={coinData}
              />
            </>
          )}
        </BtcChartWrapper>

        {coinData && (
          <CryptoTable
            coinData={coinData}
            fetchData={this.fetchData}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
  lineData: state.btcChartData.lineData,
  barData: state.btcChartData.barData
})

const mapDispatchToProps = {
  getBtcPriceData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
