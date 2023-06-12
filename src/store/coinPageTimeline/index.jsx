import { SET_COINPAGE_TIMELINE } from "./actions";

const initialState = 180;

const coinPageTimelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COINPAGE_TIMELINE:
      return action.payload;
    default:
      return state;
  }
};

export default coinPageTimelineReducer;