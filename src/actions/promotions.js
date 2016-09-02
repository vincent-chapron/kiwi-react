import request from 'request';
import {AuthenticatedRequest} from '../api/request';

import {
    SET_PROMOTION,
    GET_PROMOTION_API,
    GET_PROMOTIONS_API,
    GET_PROMOTION_STATISTICS_API,
} from './types';

export function setPromotion(promotion) {
    return {
        type: SET_PROMOTION,
        payload: promotion
    }
}

export function getPromotionsAPI() {
    const rq = AuthenticatedRequest({
        url: "http://localhost:8000/promotions"
    });

    return {
        type: GET_PROMOTIONS_API,
        payload: rq
    }
}

export function getPromotionAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/promotions/${uuid}`
    });

    return {
        type: GET_PROMOTION_API,
        payload: rq
    }
}

export function getPromotionStatisticsAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/promotions/${uuid}/statistics`
    });

    return {
        type: GET_PROMOTION_STATISTICS_API,
        payload: rq
    }
}
