import jwt_decode from 'jwt-decode';

import {
    AUTHENTICATION_LOGIN,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_TOKEN_FROM_LS
} from '../actions/types'

const INITIALE_STATE = {
    loginError: false,
    token: null,
    payload: {}
};

export default function (state = INITIALE_STATE, action) {
    let token = null;
    switch (action.type) {
        case AUTHENTICATION_LOGIN:
            token = action.payload.token;

            let payload = {};
            let loginError = true;
            if (token) {
                loginError = false;
                localStorage.setItem('token', token);
            }
            return {...state, token, payload, loginError};
        case AUTHENTICATION_LOGOUT || AUTHENTICATION_IS_EXPIRED:
            localStorage.removeItem('token');
            return INITIALE_STATE;
        case AUTHENTICATION_TOKEN_FROM_LS:
            token = localStorage.getItem('token');
            const _state = token ? {...state, token} : state;
            return _state;
        default:
            return state;
    }
}
