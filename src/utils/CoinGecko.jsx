import axios from "axios";

export const marketData = async () => {
  try {
    const info = await axios("https://api.coingecko.com/api/v3/global");
  } catch (err) {
    console.log(err);
  }
};
