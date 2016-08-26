import request from 'request';

import {
    GET_STUDENT_API,
    POST_STUDENT_API
} from './types';

export function getStudentAPI(uuid) {
    const rq = new Promise((done, reject) => {
        request.get("http://localhost:8000/students/" + uuid, (error, response, body) => {
            if (error) return reject(error);
            done(JSON.parse(body));
        });
    });

    return {
        type: GET_STUDENT_API,
        payload: rq
    }
}

export function postStudentAPI({forenames, lastname, email, phoneMobile, promotion}) {
    const options = {
        method: 'POST',
        url: 'http://localhost:8000/students',
        body: {forenames, lastname, email, phoneMobile, promotion},
        json: true
    }

    const rq = new Promise((done, reject) => {
        request(options, (error, response, body) => {
            if (error) return reject(error);
            done(body);
        });
    });

    return {
        type: POST_STUDENT_API,
        payload: rq
    }
}
