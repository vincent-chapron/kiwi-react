import request from 'request';
import jwt_decode from 'jwt-decode';

import {API_ENDPOINT} from '../config';
import {
    AUTHENTICATION_LOGIN,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_TOKEN_FROM_LS,
    AUTHENTICATION_IS_EXPIRED,
    AUTHENTICATION_IS_NOT_EXPIRED,
} from './types';

export function login(username, password) {
    const options = {
        method: 'post',
        url: `${API_ENDPOINT}/authenticate`,
        body: {_username: username, _password: password},
        json: true
    }

    const rq = new Promise((done, reject) => {
        request(options, (error, response, body) => {
            if (error) return reject(error);
            done(body);
        });
    });

    return {
        type: AUTHENTICATION_LOGIN,
        payload: rq
    };
};

export function logout() {
    return {
        type: AUTHENTICATION_LOGOUT
    };
};

export function getTokenFromLocalStorage() {
    return {
        type: AUTHENTICATION_TOKEN_FROM_LS
    };
};

export function tokenIsExpired(token) {
    let type = null;
    const payload = jwt_decode(token);

    type = (new Date() > payload.exp) ? AUTHENTICATION_IS_EXPIRED : AUTHENTICATION_IS_NOT_EXPIRED;

    return {type};
};
