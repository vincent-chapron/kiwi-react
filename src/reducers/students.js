import {
    GET_STUDENT_API,
    CLEAR_STUDENT,
    PATCH_STUDENT_STATUS_API,
} from '../actions/types'

const INITIALE_STATE = {
    selected: null
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_STUDENT_API:
            return {...state, selected: action.payload}
        case PATCH_STUDENT_STATUS_API:
            if (state.selected) {
                const selected = {...state.selected, status: action.payload};
                return {...state, selected}
            }
            return {...state, selected: action.payload}
        case CLEAR_STUDENT:
            return INITIALE_STATE;
        default:
            return state;
    }
}
