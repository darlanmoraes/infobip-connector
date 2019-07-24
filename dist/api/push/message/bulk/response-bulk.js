"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushMessageBulk {
    constructor(to, status, messageCount, bulkId) {
        this.to = to;
        this.status = status;
        this.messageCount = messageCount;
        this.bulkId = bulkId;
    }
}
exports.PushMessageBulk = PushMessageBulk;
class PushMessageBulkCreator {
    static create(source) {
        return new PushMessageBulk(source.to, source.status, source.messageCount, source.bulkId);
    }
}
exports.PushMessageBulkCreator = PushMessageBulkCreator;
//# sourceMappingURL=response-bulk.js.map