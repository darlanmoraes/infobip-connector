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
const request_1 = require("../request");
class Http {
    constructor() {
        this._request = request_1.request();
    }
    get request() {
        return this._request;
    }
    postJson(path, body, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(request_1.cast((yield this.request.post(path, { body, json: true })).body, type));
        });
    }
}
exports.Http = Http;
//# sourceMappingURL=http.js.map