"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsSendPinRequest {
    constructor(to, applicationId, messageId) {
        this.to = to;
        this.applicationId = applicationId;
        this.messageId = messageId;
    }
}
exports.SmsSendPinRequest = SmsSendPinRequest;
class SmsSendPinRequestCreator {
    static create(source) {
        return new SmsSendPinRequest(source.to, source.applicationId, source.messageId);
    }
}
exports.SmsSendPinRequestCreator = SmsSendPinRequestCreator;
//# sourceMappingURL=request.js.map