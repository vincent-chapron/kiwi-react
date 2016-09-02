import {
    GET_PROMOTION_COURSES_API,
    POST_COURSE_API,
    GET_COURSE_API,
    CLEAR_COURSE,
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
        default:
            return state;
    }
}
