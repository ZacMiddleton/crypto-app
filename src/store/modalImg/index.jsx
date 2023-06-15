import { SET_MODAL_IMG } from "./actions";

const initialState = null;

export const modalImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_IMG:
      return action.payload;
    default:
      return state;
  }
};

export default modalImgReducer;
