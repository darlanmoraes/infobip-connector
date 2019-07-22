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
const configuration_1 = require("../../configuration");
function sendSmsTextSingle(id, request) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = yield got.post(`${configuration_1.DEFAULT_CONFIGURATION.hostname}/sms/1/text/single`, {
            json: request,
            headers: {
                'Authorization': configuration_1.DEFAULT_CONFIGURATION.toAuthorization(),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log(JSON.stringify(body));
        return Promise.reject({});
    });
}
exports.sendSmsTextSingle = sendSmsTextSingle;
//# sourceMappingURL=sms-service.js.map