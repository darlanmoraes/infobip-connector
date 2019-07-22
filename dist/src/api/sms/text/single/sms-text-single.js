"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmsTextSingleRequest = /** @class */ (function () {
    function SmsTextSingleRequest(from, to) {
        this.from = from;
        this.to = to;
    }
    return SmsTextSingleRequest;
}());
exports.SmsTextSingleRequest = SmsTextSingleRequest;
var SmsTextSingleRequestCreator = /** @class */ (function () {
    function SmsTextSingleRequestCreator() {
    }
    SmsTextSingleRequestCreator.create = function (event) {
        return new SmsTextSingleRequest(event.from, event.to);
    };
    return SmsTextSingleRequestCreator;
}());
exports.SmsTextSingleRequestCreator = SmsTextSingleRequestCreator;
var x = SmsTextSingleRequestCreator.create({
    from: ''
});
console.log(x.from);
