import axios from "axios";

export const marketData = async (getData) => {
  try {
    const info = await axios("https://api.coingecko.com/api/v3/global");
    getData(info);
  } catch (err) {
    console.log(err);
  }
};

export const btcPriceData = async (getData) => {
  try {
    const info = await axios("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily");
    getData(info);
  } catch (err) {
    console.log(err);
  }
};

export const coinData = async (getCoinData, currency) => {
  try {
    const info = await axios (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`);
    getCoinData(info)
  } catch(err) {
    console.log(err)
  }
}
