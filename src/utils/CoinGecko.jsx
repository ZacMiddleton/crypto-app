import axios from "axios";
import Bottleneck from "bottleneck";
const limiter = new Bottleneck({
  minTime: 1000 / 20,
});

export const marketData = async (getData) => {
  try {
    const info = await limiter.schedule(() =>
      axios("https://api.coingecko.com/api/v3/global")
    );
    getData(info);
  } catch (err) {
    console.log(err);
  }
};

export const btcPriceData = async (getData, currency) => {
  try {
    const info = await limiter.schedule(() =>
      axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency.toLowerCase()}&days=180&interval=daily`
      )
    );
    getData(info);
  } catch (err) {
    console.log(err);
  }
};

export const coinData = async (dataFunction, currency, page, perPage) => {
  const cur = currency.toLowerCase()
  try {
    const info = await limiter.schedule(() =>
      axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
    );
    dataFunction(info);
  } catch (err) {
    console.log(err);
  }
};

export const getPageData = async (dataFunction, coin) => {
  try {
    const info = await limiter.schedule(() =>
      axios(
        `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      )
    );
    dataFunction(info);
  } catch (err) {
    console.log(err);
  }
};
