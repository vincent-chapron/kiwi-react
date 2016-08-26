import request from 'request';

import {
    GET_BEACONS_API,
    POST_BEACON_API,
    PUT_BEACON_IN_PROMOTION_API
} from './types';

export function getBeaconsAPI() {
    const rq = new Promise((done, reject) => {
        request.get(`http://localhost:8000/beacons`, (error, response, body) => {
            if (error) return reject(error);
            done(JSON.parse(body));
        });
    });

    return {
        type: GET_BEACONS_API,
        payload: rq
    }
}

export function postBeaconAPI({name, secureUuid}) {
    const options = {
        method: 'post',
        url: 'http://localhost:8000/beacons',
        body: {name, secureUuid},
        json: true
    }

    const rq = new Promise((done, reject) => {
        request(options, (error, response, body) => {
            if (error) return reject(error);
            done(body);
        });
    });

    return {
        type: POST_BEACON_API,
        payload: rq
    }
}

export function patchBeaconInPromotionAPI(promotion, beacon) {
    const options = {
        method: 'PATCH',
        url: `http://localhost:8000/promotions/${promotion}/beacons/${beacon}`,
        json: true
    }

    const rq = new Promise((done, reject) => {
        request(options, (error, response, body) => {
            if (error) return reject(error);
            done(body);
        });
    });

    return {
        type: PUT_BEACON_IN_PROMOTION_API,
        payload: rq
    }
}
