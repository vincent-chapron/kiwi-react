import {AuthenticatedRequest} from '../api/request';
import {API_ENDPOINT} from '../config';
import {
    POST_EXCEPTION_API,
    DELETE_EXCEPTION_API,
} from './types';

export function postExceptionAPI(params) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `${API_ENDPOINT}/exceptions`,
        body: params
    });

    return {
        type: POST_EXCEPTION_API,
        payload: rq
    }
}

export function deleteExceptionAPI(uuid) {
    const rq = AuthenticatedRequest({
        method: 'DELETE',
        url: `${API_ENDPOINT}/exceptions/${uuid}`,
    });

    return {
        type: DELETE_EXCEPTION_API,
        payload: rq
    }
}
