"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushMessageSingleResponse {
    constructor(to, status, messageCount, bulkId) {
        this.to = to;
        this.status = status;
        this.messageCount = messageCount;
        this.bulkId = bulkId;
    }
}
exports.PushMessageSingleResponse = PushMessageSingleResponse;
class PushMessageSingleResponseCreator {
    static create(source) {
        return new PushMessageSingleResponse(source.to, source.status, source.messageCount, source.bulkId);
    }
}
exports.PushMessageSingleResponseCreator = PushMessageSingleResponseCreator;
//# sourceMappingURL=response.js.map