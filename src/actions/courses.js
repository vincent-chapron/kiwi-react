import request from 'request';

import {
    GET_PROMOTION_COURSES_API,
    POST_COURSE_API
} from './types';

export function getPromotionCoursesAPI(uuid) {
    const rq = new Promise((done, reject) => {
        request.get(`http://localhost:8000/promotions/${uuid}/courses`, (error, response, body) => {
            if (error) return reject(error);
            done(JSON.parse(body));
        });
    });

    return {
        type: GET_PROMOTION_COURSES_API,
        payload: rq
    }
}

export function postCourseAPI({name, promotion}) {
    const rq = new Promise((done, reject) => {
        const options = {
            method: 'POST',
            url: 'http://localhost:8000/courses',
            body: {name, promotion},
            json: true
        }

        request(options, (error, response, body) => {
            if (error) return reject(error);
            done(body);
        });
    });

    return {
        type: POST_COURSE_API,
        payload: rq
    }
}
