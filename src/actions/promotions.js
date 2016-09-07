import {AuthenticatedRequest} from '../api/request';
import {API_ENDPOINT} from '../config';
import {
    SET_PROMOTION,
    GET_PROMOTION_API,
    GET_PROMOTIONS_API,
    GET_PROMOTION_STATISTICS_API,
    SET_STATISTICS_WS,
} from './types';

export function setStatisticsWebsocket(statistics) {
    return {
        type: SET_STATISTICS_WS,
        payload: statistics
    }
}

export function setPromotion(promotion) {
    return {
        type: SET_PROMOTION,
        payload: promotion
    }
}

export function getPromotionsAPI() {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/promotions`
    });

    return {
        type: GET_PROMOTIONS_API,
        payload: rq
    }
}

export function getPromotionAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/promotions/${uuid}`
    });

    return {
        type: GET_PROMOTION_API,
        payload: rq
    }
}

export function getPromotionStatisticsAPI(uuid) {
    const rq = AuthenticatedRequest({
        url: `${API_ENDPOINT}/promotions/${uuid}/statistics`
    });

    return {
        type: GET_PROMOTION_STATISTICS_API,
        payload: rq
    }
}
