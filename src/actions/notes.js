import request from 'request';
import {AuthenticatedRequest} from '../api/request';

import {
    GET_COURSE_NOTES_API,
} from './types';

export function getCourseNotesAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/courses/${uuid}/notes`
    });

    return {
        type: GET_COURSE_NOTES_API,
        payload: rq
    }
}
