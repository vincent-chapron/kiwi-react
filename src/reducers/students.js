import {
    GET_STUDENT_API
} from '../actions/types'

const INITIALE_STATE = {
    selected: null
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_STUDENT_API:
            return {...state, selected: action.payload}
        default:
            return state;
    }
}
