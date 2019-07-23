"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
function getHttpContextId() {
    return [...Array(10)]
        .map(i => (~~(Math.random() * 36))
        .toString(36))
        .join('');
}
function onBeforeRequest() {
    return [
        options => {
            const raw = options;
            raw.httpContextId = getHttpContextId();
            const request = [
                'httpContextId',
                'method',
                'protocol',
                'hostname',
                'path',
                'query',
                'headers',
                'json'
            ].reduce((data, key) => (Object.assign({}, data, { [key]: raw[key] })), {});
            console.log(JSON.stringify(request));
        }
    ];
}
function onAfterRequest() {
    return [
        (response, options) => {
            console.log(response.request);
            const body = {
                statusCode: response.statusCode,
                headers: response.headers,
                json: response.body,
                httpContextId: response.request.gotOptions.httpContextId
            };
            console.log(JSON.stringify(body));
            return response;
        }
    ];
}
exports.extension = got.extend({
    hooks: {
        beforeRequest: onBeforeRequest(),
        afterResponse: onAfterRequest()
    }
});
//# sourceMappingURL=extension.js.map