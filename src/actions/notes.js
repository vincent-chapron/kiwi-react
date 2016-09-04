import {AuthenticatedRequest} from '../api/request';
import {API_ENDPOINT} from '../config';
import {
    GET_COURSE_NOTES_API,
    POST_NOTE_API,
} from './types';

export function getCourseNotesAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/courses/${uuid}/notes`
    });

    return {
        type: GET_COURSE_NOTES_API,
        payload: rq
    }
}

export function postNoteAPI({name, base = 20, scale = {note: 20}, course}) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `${API_ENDPOINT}/notes`,
        body: {name, base, scale, course}
    });

    return {
        type: POST_NOTE_API,
        payload: rq
    }
}
