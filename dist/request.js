"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
const index_1 = require("./index");
const ID_LENGTH = 36;
const ID_START = 2;
const ID_END = 15;
function httpContextId() {
    return Math.random()
        .toString(ID_LENGTH)
        .substring(ID_START, ID_END) + Math.random()
        .toString(ID_LENGTH)
        .substring(ID_START, ID_END);
}
function getLoggable(raw, keys) {
    return keys.reduce((data, key) => (Object.assign({}, data, { [key]: raw[key] })), {});
}
function beforeRequest() {
    return [
        (options) => {
            const raw = options;
            raw.httpContextId = httpContextId();
            const data = getLoggable(raw, [
                "httpContextId",
                "method",
                "protocol",
                "hostname",
                "path",
                "query",
                "headers",
                "body",
            ]);
            process.stdout.write(`${JSON.stringify(data)}\n`);
        },
    ];
}
function afterRequest() {
    return [
        (raw, _) => {
            const data = getLoggable(raw, [
                "statusCode",
                "headers",
                "body",
            ]);
            data.httpContextId = raw.request.gotOptions.httpContextId;
            process.stdout.write(`${JSON.stringify(data)}\n`);
            return raw;
        },
    ];
}
function request() {
    const configuration = index_1.Infobip.configuration();
    return got.extend({
        baseUrl: configuration.hostname,
        headers: {
            "Accept": "application/json",
            "Authorization": configuration.toAuthorization(),
            "Content-Type": "application/json",
        },
        hooks: {
            afterResponse: afterRequest(),
            beforeRequest: beforeRequest(),
        },
    });
}
function cast(json, type) {
    const target = new type();
    Object.keys(json)
        .forEach((attribute) => target[attribute] = json[attribute]);
    return target;
}
class Http {
    constructor() {
        this.request = request();
    }
    post(path, body, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return cast((yield this.request.post(path, {
                body, json: true,
            })).body, type);
        });
    }
    get(path, query, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return cast((yield this.request.get(path, {
                json: true, query,
            })).body, type);
        });
    }
    put(path, body, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return cast((yield this.request.put(path, {
                body, json: true,
            })).body, type);
        });
    }
    delete(path, query, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return cast((yield this.request.delete(path, {
                json: true, query,
            })).body, type);
        });
    }
}
exports.Http = Http;
//# sourceMappingURL=request.js.map