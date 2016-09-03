import {
    SET_YEAR,
    CLEAR_YEAR,
    GET_YEAR_API,
} from '../actions/types'

const INITIALE_STATE = {
    current: null,
    selected: null,
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case SET_YEAR:
            return {...state, current: action.payload};
        case CLEAR_YEAR:
            return INITIALE_STATE;
        case GET_YEAR_API:
            return {...state, selected: action.payload};
        default:
            return state;
    }
}
