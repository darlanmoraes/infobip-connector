"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsTextSingleResponse {
    constructor(bulkId, messages) {
        this.bulkId = bulkId;
        this.messages = messages;
    }
}
exports.SmsTextSingleResponse = SmsTextSingleResponse;
class SmsTextSingleResponseCreator {
    static create(source) {
        return new SmsTextSingleResponse(source.bulkId, source.messages);
    }
}
exports.SmsTextSingleResponseCreator = SmsTextSingleResponseCreator;
//# sourceMappingURL=response.js.map