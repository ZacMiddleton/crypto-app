import { GET_BTCCHARTDATA_SUCCESS } from "./actions";

const initialState = {
  barData: null,
  lineData: null,
};

const btcChartDataReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_BTCCHARTDATA_SUCCESS:
            return {
                ...state,
                barData: action.payload.total_volumes,
                lineData: action.payload.prices,
              };
    default:
      return state;
  }
};

export default btcChartDataReducer; 
