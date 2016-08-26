import request from 'request';

import {
    SET_PROMOTION,
    GET_PROMOTION_API,
    GET_PROMOTIONS_API
} from './types';

export function setPromotion(promotion) {
    return {
        type: SET_PROMOTION,
        payload: promotion
    }
}

export function getPromotionsAPI() {
    const rq = new Promise((done, reject) => {
        request.get("http://localhost:8000/promotions", (error, response, body) => {
            if (error) return reject(error);
            done(JSON.parse(body));
        });
    });

    return {
        type: GET_PROMOTIONS_API,
        payload: rq
    }
}

export function getPromotionAPI(uuid) {
    const rq = new Promise((done, reject) => {
        request.get("http://localhost:8000/promotions/" + uuid, (error, response, body) => {
            if (error) return reject(error);
            done(JSON.parse(body));
        });
    });

    return {
        type: GET_PROMOTION_API,
        payload: rq
    }
}
