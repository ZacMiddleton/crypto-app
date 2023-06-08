import { GET_COINDATA_SUCCESS, SET_COINDATA } from "./actions";

const initialState = {};

const coinDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_COINDATA_SUCCESS: {
      if (!state.data) {
        return {
          ...state,
          data: [...action.payload],
        };
      }
      const newCoinData = state.data.filter(
        (coin) => !action.payload.some((item) => item.id === coin.id)
      );
      return {
        ...state,
        data: [...newCoinData, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export default coinDataReducer;
