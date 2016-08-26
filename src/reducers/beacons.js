import {
    GET_BEACONS_API,
    POST_BEACON_API
} from '../actions/types'

const INITIALE_STATE = {
    all: []
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_BEACONS_API:
            return {...state, all: action.payload}
        case POST_BEACON_API:
            const all = [...state.all, action.payload];
            return {...state, all}
        default:
            return state;
    }
}
