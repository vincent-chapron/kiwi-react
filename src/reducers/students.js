import {
    GET_STUDENT_API,
    CLEAR_STUDENT,
} from '../actions/types'

const INITIALE_STATE = {
    selected: null
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_STUDENT_API:
            return {...state, selected: action.payload}
        case CLEAR_STUDENT:
            return INITIALE_STATE;
        default:
            return state;
    }
}
