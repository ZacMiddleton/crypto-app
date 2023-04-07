import axios from "axios";

export const marketData = async (getData) => {
  try {
    const info = await axios("https://api.coingecko.com/api/v3/global");
    getData(info);
  } catch (err) {
    console.log(err);
  }
};

export const BtcPriceData = async (getData) => {
  try {
    const info = await axios("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily");
    getData(info);
  } catch (err) {
    console.log(err);
  }
};
