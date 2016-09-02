import request from 'request';
import {AuthenticatedRequest} from '../api/request';

import {
    GET_BEACONS_API,
    POST_BEACON_API,
    PUT_BEACON_IN_PROMOTION_API
} from './types';

export function getBeaconsAPI() {
    const rq = AuthenticatedRequest({
        url: `http://localhost:8000/beacons`
    });

    return {
        type: GET_BEACONS_API,
        payload: rq
    }
}

export function postBeaconAPI({name, secureUuid}) {
    const rq = AuthenticatedRequest({
        method: 'POST',
        url: `http://localhost:8000/beacons`,
        body: {name, secureUuid}
    });

    return {
        type: POST_BEACON_API,
        payload: rq
    }
}

export function patchBeaconInPromotionAPI(promotion, beacon) {
    const rq = AuthenticatedRequest({
        method: 'PATCH',
        url: `http://localhost:8000/promotions/${promotion}/beacons/${beacon}`,
        body: {name, secureUuid}
    });

    return {
        type: PUT_BEACON_IN_PROMOTION_API,
        payload: rq
    }
}
