import { GET_COINDATA_SUCCESS } from './actions';

const initialState = null;

const coinDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COINDATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
};

export default coinDataReducer;