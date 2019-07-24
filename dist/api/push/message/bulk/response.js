"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushMessageBulkResponse {
    constructor(bulks) {
        this.bulks = bulks;
    }
}
exports.PushMessageBulkResponse = PushMessageBulkResponse;
class PushMessageBulkResponseCreator {
    static create(source) {
        return new PushMessageBulkResponse(source.bulks);
    }
}
exports.PushMessageBulkResponseCreator = PushMessageBulkResponseCreator;
//# sourceMappingURL=response.js.map