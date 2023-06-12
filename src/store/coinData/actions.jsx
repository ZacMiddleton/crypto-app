import axios from "axios";

export const GET_COINDATA_SUCCESS = "GET_COINDATA_SUCCESS";
export const GET_COINDATA_ERROR = "GET_COINDATA_ERROR";
export const SET_COINDATA = "SET_COINDATA";

export const getCoinData =
  (currency, page, perPage) => async (dispatch) => {
    const cur = currency.toLowerCase();
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      dispatch({
        type: GET_COINDATA_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_COINDATA_ERROR,
        payload: err,
      });
      console.log(err);
    }
  };