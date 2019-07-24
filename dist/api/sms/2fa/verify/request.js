"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsVerifyPinRequest {
    constructor(pin) {
        this.pin = pin;
    }
}
exports.SmsVerifyPinRequest = SmsVerifyPinRequest;
class SmsVerifyPinRequestCreator {
    static create(source) {
        return new SmsVerifyPinRequest(source.pin);
    }
}
exports.SmsVerifyPinRequestCreator = SmsVerifyPinRequestCreator;
//# sourceMappingURL=request.js.map