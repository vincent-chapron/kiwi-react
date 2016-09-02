import {
    GET_COURSE_NOTES_API
} from '../actions/types'

const INITIALE_STATE = {
    all: []
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case GET_COURSE_NOTES_API:
            return {...state, all: action.payload}
        default:
            return state;
    }
}
