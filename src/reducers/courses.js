import {
    GET_PROMOTION_COURSES_API,
    POST_COURSE_API,
    GET_COURSE_API,
    CLEAR_COURSE,
    POST_NOTE_API,
} from '../actions/types'

const INITIALE_STATE = {
    all: [],
    selected: null
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_PROMOTION_COURSES_API:
            return {...state, all: action.payload};
        case GET_COURSE_API:
            return {...state, selected: action.payload};
        case CLEAR_COURSE:
            return INITIALE_STATE;
        case POST_NOTE_API:
            if (state.selected) {
                const notes = [...state.selected.notes, action.payload];
                const selected = {...state.selected, notes};
                return {...state, selected}
            }
            return state;
        default:
            return state;
    }
}
