import { SET_COINPAGE_TIMELINE } from "./actions";

const initialState = {};

const coinPageTimelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COINPAGE_TIMELINE:
      return {
        ...state,
        timeline: action.payload,
      };
    default:
      return state;
  }
};

export default coinPageTimelineReducer;