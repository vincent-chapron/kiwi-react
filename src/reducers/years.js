import {
    SET_YEAR
} from '../actions/types'

const INITIALE_STATE = {
    current: null
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case SET_YEAR:
            return {...state, current: action.payload}
        default:
            return state;
    }
}
