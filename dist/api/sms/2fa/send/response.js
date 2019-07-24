"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsSendPinResponse {
    constructor(pinId, to, ncStatus, smsStatus) {
        this.pinId = pinId;
        this.to = to;
        this.ncStatus = ncStatus;
        this.smsStatus = smsStatus;
    }
}
exports.SmsSendPinResponse = SmsSendPinResponse;
class SmsSendPinResponseCreator {
    static create(source) {
        return new SmsSendPinResponse(source.pinId, source.to, source.ncStatus, source.smsStatus);
    }
}
exports.SmsSendPinResponseCreator = SmsSendPinResponseCreator;
//# sourceMappingURL=response.js.map