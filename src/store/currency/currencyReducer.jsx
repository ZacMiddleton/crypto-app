import {SET_CURRENCY} from './action';

const initialState = "USD";

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

export default currencyReducer;