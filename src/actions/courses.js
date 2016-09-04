import {AuthenticatedRequest} from '../api/request';
import {API_ENDPOINT} from '../config';
import {
    GET_PROMOTION_COURSES_API,
    POST_COURSE_API,
    GET_COURSE_API,
    CLEAR_COURSE,
} from './types';

export function clearCourse() {
    return {
        type: CLEAR_COURSE
    }
}

export function getPromotionCoursesAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/promotions/${uuid}/courses`
    });

    return {
        type: GET_PROMOTION_COURSES_API,
        payload: rq
    }
}


export function getCourseAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/courses/${uuid}`
    });

    return {
        type: GET_COURSE_API,
        payload: rq
    }
}

export function postCourseAPI({name, promotion}) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `${API_ENDPOINT}/courses`,
        body: {name, promotion}
    });

    return {
        type: POST_COURSE_API,
        payload: rq
    }
}
