import request from 'request';
import {AuthenticatedRequest} from '../api/request';

import {
    GET_STUDENT_API,
    POST_STUDENT_API
} from './types';

export function getStudentAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/students/${uuid}`
    });

    return {
        type: GET_STUDENT_API,
        payload: rq
    }
}

export function postStudentAPI({forenames, lastname, email, phoneMobile, promotion}) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `http://localhost:8000/students`,
        body: {forenames, lastname, email, phoneMobile, promotion},
    });

    return {
        type: POST_STUDENT_API,
        payload: rq
    }
}
