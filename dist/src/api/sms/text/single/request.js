"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsTextSingleRequest {
    constructor(from, to, text) {
        this.from = from;
        this.to = to;
        this.text = text;
    }
}
exports.SmsTextSingleRequest = SmsTextSingleRequest;
class SmsTextSingleRequestCreator {
    static create(source) {
        return new SmsTextSingleRequest(source.from, source.to, source.text);
    }
}
exports.SmsTextSingleRequestCreator = SmsTextSingleRequestCreator;
//# sourceMappingURL=request.js.map