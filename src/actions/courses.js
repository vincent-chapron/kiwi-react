import request from 'request';
import {AuthenticatedRequest} from '../api/request';

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
        url: `http://localhost:8000/promotions/${uuid}/courses`
    });

    return {
        type: GET_PROMOTION_COURSES_API,
        payload: rq
    }
}


export function getCourseAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/courses/${uuid}`
    });

    return {
        type: GET_COURSE_API,
        payload: rq
    }
}

export function postCourseAPI({name, promotion}) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `http://localhost:8000/courses`,
        body: {name, promotion}
    });

    return {
        type: POST_COURSE_API,
        payload: rq
    }
}
