"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsVerifyPinResponse {
    constructor(pinId, msisdn, verified, attemptsRemaining, pinError) {
        this.pinId = pinId;
        this.msisdn = msisdn;
        this.verified = verified;
        this.attemptsRemaining = attemptsRemaining;
        this.pinError = pinError;
    }
}
exports.SmsVerifyPinResponse = SmsVerifyPinResponse;
class SmsVerifyPinResponseCreator {
    static create(source) {
        return new SmsVerifyPinResponse(source.pinId, source.msisdn, source.verified, source.attemptsRemaining, source.pinError);
    }
}
exports.SmsVerifyPinResponseCreator = SmsVerifyPinResponseCreator;
//# sourceMappingURL=response.js.map