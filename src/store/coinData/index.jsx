import { GET_COINDATA_SUCCESS } from './actions';

const initialState = {};

const coinDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COINDATA_SUCCESS:
            return {
                data: action.payload,
            }
        default:
            return state;
    }
};

export default coinDataReducer;