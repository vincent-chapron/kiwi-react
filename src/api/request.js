import request from 'request';

export const AuthenticatedRequest = function(_options) {
    const _headers = _options.headers || {};
    const headers = {
        Authorization: "Bearer " + localStorage.getItem('token'),
        ..._headers
    };

    const options = {
        method: 'GET',
        json: true,
        ..._options,
        headers
    }

    return new Promise((done, reject) => {
        request(options, (error, response, body) => {
            if (error) return reject(error);
            done(body);
        });
    });
}
