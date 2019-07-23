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
const request_1 = require("../../request");
const response_1 = require("./text/single/response");
class SMS extends request_1.Http {
    sendSmsTextSingle(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`/sms/${id}/text/single`, body, response_1.SmsTextSingleResponse);
        });
    }
}
exports.SMS = SMS;
//# sourceMappingURL=sms-service.js.map