import {
    SET_PROMOTION,
    GET_PROMOTION_API,
    GET_PROMOTIONS_API,
    POST_COURSE_API,
    PUT_BEACON_IN_PROMOTION_API,
    POST_STUDENT_API
} from '../actions/types'

const INITIALE_STATE = {
    current: null,
    all: [],
    selected: null
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case SET_PROMOTION:
            return {...state, current: action.payload}
        case GET_PROMOTION_API:
            return {...state, selected: action.payload}
        case GET_PROMOTIONS_API:
            return {...state, all: action.payload}
        case POST_COURSE_API:
            if (state.selected) {
                const courses = [...state.selected.courses, action.payload];
                const selected = {...state.selected, courses};
                return {...state, selected}
            }
            return state;
        case PUT_BEACON_IN_PROMOTION_API:
            if (state.selected) {
                const beacons = action.payload.beacons;
                const selected = {...state.selected, beacons};
                return {...state, selected}
            }
            return state;
        case POST_STUDENT_API:
            if (state.selected) {
                const students = [...state.selected.students, action.payload];
                const selected = {...state.selected, students};
                return {...state, selected}
            }
            return state;
        default:
            return state;
    }
}
