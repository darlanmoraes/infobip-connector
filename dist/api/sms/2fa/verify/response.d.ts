import { PinError } from "../pin-error";
export declare class SmsVerifyPinResponse {
    pinId?: string;
    msisdn?: string;
    verified?: boolean;
    attemptsRemaining?: number;
    pinError?: PinError;
    constructor(pinId?: string, msisdn?: string, verified?: boolean, attemptsRemaining?: number, pinError?: PinError);
}
export declare class SmsVerifyPinResponseCreator {
    static create(source: SmsVerifyPinResponse): SmsVerifyPinResponse;
}
