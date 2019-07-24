"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsTextSingleResponseDetails {
    constructor(to, status, messageId) {
        this.to = to;
        this.status = status;
        this.messageId = messageId;
    }
}
exports.SmsTextSingleResponseDetails = SmsTextSingleResponseDetails;
class SmsTextSingleResponseDetailsCreator {
    static create(source) {
        return new SmsTextSingleResponseDetails(source.to, source.status, source.messageId);
    }
}
exports.SmsTextSingleResponseDetailsCreator = SmsTextSingleResponseDetailsCreator;
//# sourceMappingURL=response-details.js.map