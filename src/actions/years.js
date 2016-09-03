import {AuthenticatedRequest} from '../api/request';
import {
    SET_YEAR,
    CLEAR_YEAR,
    GET_YEAR_API,
} from './types';

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}

export function clearYear() {
    return {
        type: CLEAR_YEAR
    }
}

export function getYearAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/years/${uuid}`
    });

    return {
        type: GET_YEAR_API,
        payload: rq
    }
}
