import { NcStatus } from "../../nc-status";
import { SmsStatus } from "../../sms-status";
export declare class SmsSendPinResponse {
    pinId?: string;
    to?: string;
    ncStatus?: NcStatus;
    smsStatus?: SmsStatus;
    constructor(pinId?: string, to?: string, ncStatus?: NcStatus, smsStatus?: SmsStatus);
}
export declare class SmsSendPinResponseCreator {
    static create(source: SmsSendPinResponse): SmsSendPinResponse;
}
