import request from 'request';
import {AuthenticatedRequest} from '../api/request';

import {
    POST_EXCEPTION_API,
} from './types';

export function postExceptionAPI(params) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `http://localhost:8000/exceptions`,
        body: params
    });

    return {
        type: POST_EXCEPTION_API,
        payload: rq
    }
}
