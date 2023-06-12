import { GET_COINDATA_SUCCESS } from "./actions";

const initialState = {
  data: []
};

const coinDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINDATA_SUCCESS: {

      const newCoinsMap = action.payload.reduce((map, coin) => {
        map[coin.id] = coin;
        return map;
      }, {});
      
      const newData = state.data.map(coin => newCoinsMap[coin.id] ? newCoinsMap[coin.id] : coin);

      const existingCoinIds = new Set(state.data.map(coin => coin.id));
      const uniqueCoins = action.payload.filter(coin => !existingCoinIds.has(coin.id));
      return {
        ...state,
        data: [...newData, ...uniqueCoins],
      };
    }
    default:
      return state;
  }
};

export default coinDataReducer;
