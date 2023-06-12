import axios from "axios";

export const GET_BTCCHARTDATA_SUCCESS = "GET_BTCCHARTDATA_SUCCESS";
export const GET_BTCCHARTDATA_ERROR = "GET_BTCCHARTDATA_ERROR";

export const getBtcPriceData = (currency, timeline) => async (dispatch) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency.toLowerCase()}&days=${timeline}&interval=daily`
    );
    dispatch({
      type: GET_BTCCHARTDATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_BTCCHARTDATA_ERROR,
      payload: err,
    });
    console.log(err);
  }
};
