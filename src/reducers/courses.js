import {
    GET_PROMOTION_COURSES_API,
    POST_COURSE_API
} from '../actions/types'

const INITIALE_STATE = {
    all: []
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_PROMOTION_COURSES_API:
            return {...state, all: action.payload}
        default:
            return state;
    }
}
