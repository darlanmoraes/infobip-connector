"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushMessageBulkRequest {
    constructor(messages, from, to, text, sendAt, customPayload, notificationOptions, validityPeriodTimeUnit, notifyUrl, notifyContentType, callbackData, targetOnlyPrimaryDevices) {
        this.messages = messages;
        this.from = from;
        this.to = to;
        this.text = text;
        this.sendAt = sendAt;
        this.customPayload = customPayload;
        this.notificationOptions = notificationOptions;
        this.validityPeriodTimeUnit = validityPeriodTimeUnit;
        this.notifyUrl = notifyUrl;
        this.notifyContentType = notifyContentType;
        this.callbackData = callbackData;
        this.targetOnlyPrimaryDevices = targetOnlyPrimaryDevices;
    }
}
exports.PushMessageBulkRequest = PushMessageBulkRequest;
class PushMessageBulkRequestCreator {
    static create(source) {
        return new PushMessageBulkRequest(source.messages, source.from, source.to, source.text, source.sendAt, source.customPayload, source.notificationOptions, source.validityPeriodTimeUnit, source.notifyUrl, source.notifyContentType, source.callbackData, source.targetOnlyPrimaryDevices);
    }
}
exports.PushMessageBulkRequestCreator = PushMessageBulkRequestCreator;
//# sourceMappingURL=request.js.map