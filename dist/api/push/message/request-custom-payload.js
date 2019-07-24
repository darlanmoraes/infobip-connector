"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushCustomPayload {
    constructor(targetUrl, someData) {
        this.targetUrl = targetUrl;
        this.someData = someData;
    }
}
exports.PushCustomPayload = PushCustomPayload;
class PushCustomPayloadCreator {
    static create(source) {
        return new PushCustomPayload(source.targetUrl, source.someData);
    }
}
exports.PushCustomPayloadCreator = PushCustomPayloadCreator;
//# sourceMappingURL=request-custom-payload.js.map