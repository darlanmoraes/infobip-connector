export declare class SmsVerifyPinRequest {
    pin?: string;
    constructor(pin?: string);
}
export declare class SmsVerifyPinRequestCreator {
    static create(source: SmsVerifyPinRequest): SmsVerifyPinRequest;
}
