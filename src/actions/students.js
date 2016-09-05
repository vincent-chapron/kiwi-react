import {AuthenticatedRequest} from '../api/request';
import {API_ENDPOINT} from '../config';
import {
    GET_STUDENT_API,
    POST_STUDENT_API,
    CLEAR_STUDENT,
    PATCH_STUDENT_STATUS_API,
} from './types';

export function clearStudent() {
    return {
        type: CLEAR_STUDENT
    }
}

export function getStudentAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/students/${uuid}`
    });

    return {
        type: GET_STUDENT_API,
        payload: rq
    }
}

export function postStudentAPI({forenames, lastname, email, phoneMobile, promotion}) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `${API_ENDPOINT}/students`,
        body: {forenames, lastname, email, phoneMobile, promotion},
    });

    return {
        type: POST_STUDENT_API,
        payload: rq
    }
}

export function patchStudentStatusAPI(uuid, status) {
    const rq = AuthenticatedRequest({
        method: 'PATCH',
        url: `${API_ENDPOINT}/students/${uuid}/statuses/${status}`
    });

    return {
        type: PATCH_STUDENT_STATUS_API,
        payload: rq
    }
}
