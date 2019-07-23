"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushMessageSingleRequest {
    constructor(from, to, text, sendAt, customPayload, notificationOptions, validityPeriod, notifyUrl, notifyContentType, callbackData, targetOnlyPrimaryDevices) {
        this.from = from;
        this.to = to;
        this.text = text;
        this.sendAt = sendAt;
        this.customPayload = customPayload;
        this.notificationOptions = notificationOptions;
        this.validityPeriod = validityPeriod;
        this.notifyUrl = notifyUrl;
        this.notifyContentType = notifyContentType;
        this.callbackData = callbackData;
        this.targetOnlyPrimaryDevices = targetOnlyPrimaryDevices;
    }
}
exports.PushMessageSingleRequest = PushMessageSingleRequest;
class PushMessageSingleRequestCreator {
    static create(source) {
        return new PushMessageSingleRequest(source.from, source.to, source.text, source.sendAt, source.customPayload, source.notificationOptions, source.validityPeriod, source.notifyUrl, source.notifyContentType, source.callbackData, source.targetOnlyPrimaryDevices);
    }
}
exports.PushMessageSingleRequestCreator = PushMessageSingleRequestCreator;
//# sourceMappingURL=request.js.map