import {
    SET_YEAR,
    CLEAR_YEAR,
    GET_YEAR_API,
    POST_EXCEPTION_API,
    DELETE_EXCEPTION_API,
} from '../actions/types'

const INITIALE_STATE = {
    current: null,
    selected: null,
};

export default function (state = INITIALE_STATE, action) {
    switch (action.type) {
        case SET_YEAR:
            return {...state, current: action.payload};
        case CLEAR_YEAR:
            return INITIALE_STATE;
        case GET_YEAR_API:
            return {...state, selected: action.payload};
        case POST_EXCEPTION_API:
            if (state.selected) {
                const exceptions = [...state.selected.exceptions, action.payload];
                const selected = {...state.selected, exceptions};
                return {...state, selected}
            }
            return state;
        case DELETE_EXCEPTION_API:
            if (state.selected) {
                const exceptions = state.selected.exceptions.filter(exception => {
                    return !(exception.id == action.payload.id)
                });
                const selected = {...state.selected, exceptions};
                return {...state, selected}
            }
            return state;
        default:
            return state;
    }
}
